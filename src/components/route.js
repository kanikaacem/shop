import ProductPage from "./productPage";

export default {
    path: [
      { 
        index:1,
        path: '',
        name: '/',
        type: 'link',
        component:ProductPage
        
      },
      { 
        index:2,
        path: `/productDescription`,
        name: '/',
        type: 'link',
      },
    ]
      
  };