// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Message extends Component {
  state = {
    isloggedin: false,
  }

  onClickLogin = () => {
    this.setState(previousState => ({isloggedin: !previousState.isloggedin}))
  }

  onClickLogout = () => {
    this.setState(previousState => ({isloggedin: !previousState.isloggedin}))
  }

  render() {
    const {isloggedin} = this.state
    const message = isloggedin ? 'Welcome User' : 'Please Login'
    const button = isloggedin ? <Login /> : <Login />

    return (
      <div className="message-container">
        <p className="message">{message}</p>
        {button}
      </div>
    )
  }
}
export default Message
