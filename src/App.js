import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Http from 'axios'

class App extends Component {
  state = {
    FirstName: '',
    LastName: '',
    users: []
  }
  componentDidMount () {
    Http.get('http://localhost:3000/user').then(res => {
      console.log(res.data)
      this.setState({ users: res.data })
    })
  }
  sendData = () => {
    Http.post('http://localhost:3000/users',this.state).then(res => { console.log(res) })
    console.log(this.state)
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }
  render() {
    const { users } = this.state 
    return (
      <div className="App">
        Name  <input onChange={(e) => this.handleChange('FirstName', e)}  />
        Surame <input onChange={(e) => this.handleChange('LastName', e)} />
        <button onClick={this.sendData} >submit</button>
        {
          users.map((user, index) => (
            <div  key={index}>
              <div className='box' style={{float : 'left'}}>
                {user.FirstName}
              </div>
              <div>
                {user.LastName}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
