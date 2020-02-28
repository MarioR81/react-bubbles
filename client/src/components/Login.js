import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component{
  state={
    credentials: {
      username: '',
      password: '',
    }
  };

  handleChange = e => {
  this.setState({
    credentials: {
      ...this.state.credentials,
    [e.target.name]: e.target.value
    }
  });
};


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
login = e => {
  e.preventDefault();
  axiosWithAuth()
  .post('/api/login', this.state.credentials)
  .then(res => {
    console.log('test', res)
    window.localStorage.setItem('token', res.data.payload)
    this.props.history.push('/bubble-page')
  })
  .catch(err => console.log('Error At Axios', err))
};



  render(){
  return (
    <div className='login'>
      <h1>Welcome to the Bubble App!</h1>
      <p>Log In Here!</p>
      <form onSubmit={this.login}>
                    <input
                        name='username'
                        type='text'
                        placeholder='Login'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Log In</button>
                    </form>  

    </div>
  );
};
};

export default Login;
