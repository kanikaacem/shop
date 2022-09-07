import React from 'react';
import "./main.css";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./route";
import WorkSpace from './Workspace';

const Products = () =>{
    const getComponent = (
         <Switch>
            {routes.path.map((item, index) => (
              <Route
                exact path={item.path}
                component={item.component}
                name={item.name}
                key={index}
                />
            ))}
       
        </Switch>
    )
    return (<>
    <WorkSpace>{getComponent}</WorkSpace>  
    </>
    )
}

export default Products;