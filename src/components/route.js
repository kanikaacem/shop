import ProductPage from "./productPage";
import ProductDescription from "./ProductDescription";

export default {
    path: [
      { 
        index:1,
        path: '/',
        name: '/',
        type: 'link',
        component:ProductPage
        
      },
      { 
        index:2,
        path: `/productDescription`,
        name: '/productDescription',
        type: 'link',
        component:ProductDescription
      },

    ]
      
  };