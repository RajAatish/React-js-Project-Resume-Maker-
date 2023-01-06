import React from "react" 

const Home = () => 
{
    return(
        <>
        <div className="mt-5 mb-5 center">
            <h1>Home Component</h1>
            <div className="cart-img">
                <img src="https://cdn-icons-png.flaticon.com/512/57/57493.png" />
            </div>
           <div className="add-to-cart">
           <div className="phone-img">
                <img className="cart-img" src="https://cdn.pixabay.com/photo/2021/12/21/06/14/iphone-6884673_1280.jpg" />
            </div>
            <div className="cart-text">
                <span>I Phone 13 </span>
                <span>Price: $1000.00</span>
            </div>
            <div className="cart-btn">
                <button>Add to cart</button>
            </div>
           </div>
        </div>
        <hr />
        </>
    )
}
export default Home