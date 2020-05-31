import React, {useEffect, useState} from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

import Api from 'service/Api';
import BasicPage from "pages/BasicPage";

export const PrivateComponent = ({
                                     adminRoute,
                                     Component,
                                     ...props
                                 }) => {

    const [state, setState] = useState({loading: true, isLogged: true, isAuthenticated: false,});

    useEffect(() => {
        const doAuthenticate = async () => {
            try {
                const {user} = await Api.Fretz.User.verifyAuth();
                const isAuthenticated = !!user && adminRoute ? user.admin : true;
                setState({
                    loading: false,
                    isLogged: !!user,
                    isAuthenticated,
                });
            } catch (e) {
                console.log(e);
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
                    <Redirect to={{pathname: '/login'}}/> :
                    <BasicPage {...props}>
                        <Component {...props} />
                    </BasicPage>
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
