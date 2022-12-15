import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Register from './components/Register'
import MeetupContext from './context/MeetupContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

const defaultUser = {
  name: '',
  topic: '',
}

class App extends Component {
  state = {registered: false, userDetails: defaultUser}

  changeRegisteredStatus = user => {
    this.setState({registered: true, userDetails: user})
  }

  render() {
    const {registered, userDetails} = this.state

    return (
      <MeetupContext.Provider
        value={{
          registered,
          userDetails,
          changeRegisteredStatus: this.changeRegisteredStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
