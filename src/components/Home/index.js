import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  HomeContainer,
  NavHeader,
  LogoImage,
  LogoutButton,
  Heading,
  DigitalCardImage,
  Container,
} from './styledComponents'

const Home = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <NavHeader>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onClickLogoutButton}>
          Logout
        </LogoutButton>
      </NavHeader>
      <HomeContainer>
        <Container>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <DigitalCardImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </Container>
      </HomeContainer>
    </>
  )
}

export default Home
