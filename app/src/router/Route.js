import React, {useEffect, useState} from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

//import LoadingPage from '../pages/public/Loading';
import Api from '../service/Api';

export const PrivateComponent = ({
                                     adminRoute,
                                     Component,
                                     ...props
                                 }) => {

    const [state, setState] = useState({loading: true, isLogged: true, isAuthenticated: false,});

    useEffect(() => {
        const doAuthenticate = async () => {
            try {
                const {isLogged, isMaster} = await Api.Fretz.User.verifyAuth();
                let isAuthenticated = isLogged && adminRoute ? isMaster : true;
                setState({
                    loading: false,
                    isLogged,
                    isAuthenticated,
                });
            } catch (e) {
                alert(e);
                setState({loading: false});
            }
        };
        doAuthenticate();
    }, [adminRoute]);

    if (state.loading) {
        return <span>Loading...</span>;
    } else {
        return (
            <React.Fragment>
                {!state.isAuthenticated ?
                    <Redirect to={{pathname: '/'}}/> :
                    <Component {...props} />
                }
            </React.Fragment>
        )
    }
};

export function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => (<PrivateComponent Component={Component} {...props}/>)}/>
    )
}

export function AdminRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => (<PrivateComponent Component={Component} adminRoute={true} {...props}/>)}/>
    )
}
