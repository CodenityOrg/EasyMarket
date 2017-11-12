import { Link } from "react-router-dom";
import React from "react";

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password: ""
        };
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    emailChange(e){
        this.setState({email: e.target.value});
    }
    passwordChange(e){
        this.setState({password: e.target.value});
    }
    render(){
        return (
            <form onSubmit={this.submit}>
                <label htmlFor="email">Usuario<br/></label>
                <input type="email" name="email" autoFocus onChange={this.emailChange} value={this.state.email}/><br/>
                <label htmlFor="password">Pasword<br/> </label>
                <input type="password" pattern=".{4,}" name="password" onChange={this.passwordChange} value={this.state.password}/>
                <div>
                    <button type="submit" value="submit">Ingresar</button>
                </div>
            </form>
        )
    }
    submit(e){
        e.preventDefault();
        console.log("el email es: " + this.state.email);
        console.log("HOLA");
    }
}
