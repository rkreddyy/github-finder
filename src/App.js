import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import { async } from 'q';

class App extends Component {
  state = {
    users: [],
    isLoading: false
  }
  async componentDidMount() {
    this.setState({ isLoading: true });
    
    let res = await axios.get(`https://api.github.com/users?
                              client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                              client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data,
      isLoading: false
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
