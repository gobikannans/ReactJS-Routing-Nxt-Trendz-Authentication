import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showError: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: data.error_msg, showError: true})
    }
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {username, password, errorMessage, showError} = this.state
    return (
      <div className="login-bg-container">
        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-log"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-logo"
            />
            <div className="input-container">
              <label htmlFor="inputUsername" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="inputUsername"
                placeholder="Username"
                className="input"
                onChange={this.onUsername}
                value={username}
              />
              <label htmlFor="inputPassword" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="inputPassword"
                placeholder="Password"
                className="input"
                onChange={this.onPassword}
                value={password}
              />
              <button type="submit" className="login-btn-style">
                Login
              </button>
              {showError ? <p className="error-msg">*{errorMessage}</p> : ''}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
