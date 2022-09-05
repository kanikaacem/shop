import React from 'react';
import "./main.css";
import StarRatingComponent from 'react-star-rating-component';

const Products = () =>{
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
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:7,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img7.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:8,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img8.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:9,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img9.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:10,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img10.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:11,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img11.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:12,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img12.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:13,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img13.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:14,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img14.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:15,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img15.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
       
        {
            id:18,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img18.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:19,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img19.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        },
        {
            id:20,
            companyName: 'Wings',
            productImage:'/img/product/clothes/img20.png',
            productName: 'jeans',
            rating: 3,
            price: 300
        }
    ]
    return (<>
    <div className="productPage">
    {  productData.map((ele,id) => {
          return (
            <div className="product" style={{width:'200px'}} key={id}>
            <div className="productImage">
            <img style={{width:"100%"}} src={ele.productImage} alt=""/>
            </div>
            <div className="productDescription">
            <h1 className="productCompanyName"> Wings</h1>
                <p className="productName"> Women Jeans</p>

                <StarRatingComponent 
                    className="productRating"
                    starCount={5}
                    value={3}
                />

                <p className="productPrice"> Rs. 400</p>
            </div>
        </div>
          )

        })
      }

    </div>
    </>
    )
}

export default Products;