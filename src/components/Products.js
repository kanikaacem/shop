import React from 'react';
import "./main.css";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductPage from "./productPage";
import routes from "./route";

const Products = () =>{
    const getComponent = () => {
         <Switch>
            {routes.path.map((item, index) => (
              <Route
                exact
                path={item.path}
                component={item.component}
                name={item.name}
                key={index}
                element={<ProductPage/>}
                />
            ))}
       
        </Switch>
    }
    return (<>
     {getComponent()}
    </>
    )
}

export default Products;