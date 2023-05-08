import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  AppContainer,
  ResponsiveContainer,
  Image,
  Form,
  Heading,
  LabelElement,
  Container,
  InputElement,
  ErrorMsg,
  Button,
} from './styledComponents'

class LoginForm extends Component {
  state = {userId: '', userPin: '', errorMsg: '', showErrorMsg: false}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({userPin: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {userId, userPin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, userPin, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <ResponsiveContainer>
          <Container>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </Container>
          <Form onSubmit={this.submitForm}>
            <Heading>Welcome Back!</Heading>
            <LabelElement htmlFor="userId">User ID</LabelElement>
            <InputElement
              id="userId"
              onChange={this.onChangeUserId}
              value={userId}
              placeholder="Enter User ID"
              type="text"
            />

            <LabelElement htmlFor="pin">PIN</LabelElement>
            <InputElement
              id="pin"
              type="password"
              value={userPin}
              onChange={this.onChangeUserPin}
              placeholder="Enter PIN"
            />
            <Button type="submit">Login</Button>
            {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </Form>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
