import React, { Component } from 'react';
import { auth , db} from './global.js';
import "bootstrap/dist/css/bootstrap.css";

class SignIn extends Component {

    state = {
        email : '',
        password : ''
    }
    
    render() { 
        return (
            <form action="get"class="form-horizontal" >

                <div class="form-group">
                    <label class="control-label col-sm-2" for="emailID"> Email </label>
                    <div class="col-sm-4">
                    <input type="text" name='email' placeholder="Enter your Email ID" id="emailID" class="form-control" onChange={this.inputHandler}></input>
                    </div>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pass">Password</label>
                    <div class="col-sm-4">
                    <input type="password" placeholder="Enter password" name='password' class="form-control" onChange={this.inputHandler}></input>
                    </div>
                </div>
                <br/>

                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <input type="button" value="Sign In" class="btn btn-primary" onClick={this.login}></input>
                    </div>
                </div>
                <br/>
            </form>
        );
    }

    inputHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }


    login = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            var id = userCredential.user.uid;
            db.collection("User Details").doc(id).get()
            .then((doc) => {
                if(doc.exists)
                {
                    alert("Welcome " + doc.data()["name"]+ ", Age: " + doc.data()["age"]);
                }
                else{
                    alert("Error loading Details");
                }
            })
            .catch((error) => {
                alert(error);
            })
        })
        .catch((error) => {
            alert(error);
        })
    }
}
 
export default SignIn;