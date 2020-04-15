import "components/commons/Breadcrumb.css";
import React from 'react';
import { Route, Link } from "react-router-dom";

import PageRoutes from "pages/PageRoutes";

const Breadcrumb = (props) => (
    <div className="nav-wrapper">
        <ul>
            <Route path='/:path' component={BreadcrumbsItem} />
        </ul>
    </div>
);

const BreadcrumbsItem = (props) => {
    const {match, location} = props;
    const getTitle = () => {
        for (let routeWrap of PageRoutes) {
            const actualRoute = routeWrap.routes.find(route => route.path === match.url);
            if (!!actualRoute) return actualRoute.breadcrumbTitle;
        }
        return '';
    }
    const title = getTitle();

    return (
    <React.Fragment>
        {!!title &&
        <li className={match.isExact ? 'breadcrumb-active' : undefined}>
            <Link to={match.url || ''} className="breadcrumb">
                {title}
            </Link>
            <span className="breadcrumb-separator">{location.pathname === match.url ? "" : ">" }</span>
        </li>
        }
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem}/>
    </React.Fragment>
    )
}
export default Breadcrumb;