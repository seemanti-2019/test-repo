import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './login.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
      }
    
    state = {
        username: '',
        password: '',
    }   
   
    handleSignIn(e){
        e.preventDefault();
        this.state.username = this.refs.username.value;
        this.state.password = this.refs.password.value;
        if((this.state.username && this.state.password) && (this.state.username === this.state.password)){
            //console.log(this.state.username);
            document.getElementById('message').textContent = '';            
            this.props.history.push(`/dashboard/${this.state.username}`);
        } else {
            document.getElementById('message').textContent = 'please enter valid credential';
        }
        
        //this.props.onSignIn(this.username,this.password)
    }

    render() {
       return (
           <div className="Login">
           <form onSubmit={this.handleSignIn.bind(this)}>
               <h3>Login Form</h3>
               <FormGroup controlId="username">
                   <FormLabel style={{float:'left'}}>Username</FormLabel>
                   <FormControl autoFocus type="text" ref="username" placeholder="username" />                   
               </FormGroup>
               <FormGroup controlId="password">
                    <FormLabel style={{float:'left'}}>Password</FormLabel>
                    <FormControl type="password" ref="password" placeholder="password" />
               </FormGroup>
               <p id="message" className="error text-danger"></p>
               <Button block type="submit">Login</Button>
            </form>
           </div>
       );
    }
}