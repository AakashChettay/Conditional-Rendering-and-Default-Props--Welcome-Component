import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    let authBtn
    if (isLoggedIn) {
      authBtn =  <button>Logout</button>
    }
    else{
      authBtn = <button>Login</button>
    }
  
    return (
      <div className="container">
        <Welcome greeting="Konnichiwa" name="Luffy" />
        {authBtn}
      </div>
    )
  }
}

export default App
