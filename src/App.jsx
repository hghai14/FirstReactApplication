import React, { Component } from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
    
    state = { 
        new_user : true
     }

    render() { 
        let comp;
        if (this.state.new_user) {
            comp = <SignUp id="signup"/>;
        }
        else{
            comp = <SignIn id="signin"/>;
        }
        return (
            <div class="App">
                <div class="container">
                <nav class = "nav nav-pills flex-sm-row">
                    <a href="#" name="signup" class="nav-link" onClick={this.changeView}>Sign Up</a>
                    <a href ="#"  name="signin" class="nav-link" onClick={this.changeView}>Sign In</a>
                </nav>
                </div> 
                {comp}
           
            </div>  
        )
    }

    changeView = (event) => {
        if(event.target.name === 'signup'){
            this.setState({new_user : true});
        } 
        else{
            this.setState({new_user : false});
        }
    }
}
 
export default App;