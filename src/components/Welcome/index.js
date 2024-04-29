import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}
}

  onSubscribed = () => {
      this.setState(prevState=>({isSubscribed:!prevState.isSubscribed})
      )}

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>

        <div className="button-container">
          <button className="subs-btn" type="button" onClick={this.onSubscribed}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
