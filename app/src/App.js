import './App.css';

import React, { useEffect } from 'react';
import * as M from "materialize-css";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import pageRoutes from 'pages/PageRoutes';

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    {pageRoutes.map((pageRouter) => {
                        const Component = pageRouter.component;
                        return (
                            pageRouter.routes.map((route, idx) => {
                                return <Component key={idx} {...route}/>
                            })
                        )
                    })}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
