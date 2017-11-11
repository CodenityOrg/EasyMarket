import { Link } from "react-router-dom";
import React from "react";

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password: ""
        };
    }
    change(){

    }
    render(){
        return (
            <form method="POST" onSubmit={this.submit.bind(this)}>
                <label htmlFor="email">Usuario<br/></label>
                <input type="email" name="email" autoFocus value={this.state.email}/><br/>
                <label htmlFor="password">Pasword<br/> </label>
                <input type="password" pattern=".{4,}" name="password" value={this.state.password}/>
                <div>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        )
    }
    submit(){
        console.log();
        console.log("HOLA");
    }
}
