import React, { Component } from 'react';
import {auth , db } from './global.js';
import "bootstrap/dist/css/bootstrap.css";


class SignUp extends Component {
    state = {
        name : '',
        age : null,
        email : '',
        password : ''
    }
    render() { 
        return (
            <form action="get" class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-2" for="Name">Name </label>
                <div class="col-sm-10">
                <input type="text" name='name' placeholder="Enter your Name" id="Name" class="form-control" onChange={this.inputHandler}></input>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <label class="control-label col-sm-2" for="Age">Age </label>
                <div class="col-sm-10">
                <input type="text" name='age' placeholder="Enter your Age" id="userName" class="form-control" onChange={this.inputHandler}></input>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <label class="control-label col-sm-2" for="emailID"> Email </label>
                <div class="col-sm-10">
                <input type="text" name='email' placeholder="Enter your Email ID" id="emailID" class="form-control" onChange={this.inputHandler}></input>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pass"> Create Password</label>
                <div class="col-sm-10">
                <input type="password" placeholder="Create password" name='password' class="form-control" onChange={this.inputHandler}></input>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                <input type="button" value="Sign Up" class="btn btn-primary" onClick={this.submitDetails}></input>
                </div>
            </div>
            <br/>
            </form>
            )
    }

    inputHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }

    submitDetails = () =>{
        console.log(this.state.email);
        console.log(this.state.password);
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            var id = userCredential.user.uid;
            console.log(db);
            db.collection('User Details').doc(id).set({
                name : this.state.name,
                age : this.state.age
            })
            alert("Account Created! Sign In to check details.")
        })
        .catch((error) => {
            alert(error);
        })
    }

}
 
export default SignUp;