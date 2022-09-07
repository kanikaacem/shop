import React from 'react';
import "./main.css";

const ProductPage = () =>{
    const productData = [
        {
            id:1,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img.png',
            productName: 'women_jeans',
            rating: 3,
            price: 300,
            discount : '',
        },
        {
            id:2,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img2.png',
            productName: 'men_shirt',
            rating: 5,
            price: 700,
            discount : 10,

        },
      
        {
            id:5,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img5.png',
            productName: 'women_jeans',
            rating: 4.5,
            price: 1200,
            discount:50,
        },
        {
            id:6,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img6.png',
            productName: 'dress',
            rating: 4.5,
            price: 1200
        },
        {
            id:7,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img7.png',
            productName: 'tshirt',
            rating: 2,
            price: 300
        },
        {
            id:8,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img8.png',
            productName: 'dress',
            rating: 3,
            price: 3200,
            discount:30
        },
        {
            id:9,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img9.png',
            productName: 'sweater',
            rating: 3,
            price: 450
        },
        {
            id:10,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img10.png',
            productName: 'coat',
            rating: 3,
            price: 1200,
            discount:10
        },
        {
            id:11,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img11.png',
            productName: 'sweater',
            rating: 4,
            price: 600
        },
        {
            id:12,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img12.png',
            productName: 'sweater',
            rating: 5,
            price: 700,
            discount:5
        },
        {
            id:13,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img13.png',
            productName: 'dress',
            rating: 5,
            price: 3200,
            discount:30
        },
        {
            id:14,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img14.png',
            productName: 'shirt',
            rating: 3,
            price: 700
        },
        {
            id:15,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img15.png',
            productName: 'dress',
            rating: 3.5,
            price: 4000,
            discount: 20
        },
       
        {
            id:18,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img18.png',
            productName: 'trouser',
            rating: 3,
            price: 500
        },
        {
            id:19,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img19.png',
            productName: 'dress',
            rating: 3,
            price: 2200
        },
        {
            id:20,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img20.png',
            productName: 'jump_suit',
            rating: 3,
            price: 2300,
            discount: 20
        }
    ]
    // const showProductDescription = (id) =>{
    //    window.location.href = `productDescription/${id}`;
    // }
    return (<>
    <div className="productPage">
    {  productData.map((ele,id) => {
          return (
            <div className="product" style={{width:'250px',cursor:'pointer'}} key={ele.id}>
                <div className="productImage">
                    <img style={{width:"100%"}} src={ele.productImage} alt=""/>
                </div>
                <div className="productDescription">
                    {
                    ele.discount && <div className="discountDiv"><div className="productDiscount"> UPTO {ele.discount} OFF </div><div > Deal of the Day </div></div>
                    }
                    <h3 className="productName"> {ele.productName.replace('_',' ')}</h3>
                </div>
            </div>
          )

        })
      }

    </div>
    </>
    )
}

export default ProductPage;