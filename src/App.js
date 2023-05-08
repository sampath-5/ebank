import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
