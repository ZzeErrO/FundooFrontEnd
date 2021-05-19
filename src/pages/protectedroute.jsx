import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import auth from "./LoginPage/LoginPage.jsx";

export default function ProtectedRoute({component: Component, ...rest}) {

    return (
        <Route
        {...rest}
        render = {props => {
            if (auth.validation()) {
                console.log(auth.validation())
                console.log(...props)
                return <Component {...props}/>
            }else{
                return <Redirect to={{ pathname:"/", state: {from : props.location}}}/>
            }
        }}
        
        />
        
    );
}