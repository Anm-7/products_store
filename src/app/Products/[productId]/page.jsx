"use client"
import "./product.css"
import { useEffect,useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Details({params }) {
  const [product, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async (id) => {
          try {
            const request = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await request.json();
            console.log(result);
            setProducts(result);
          } catch (error) {
            console.error(error);
            // Handle the error, such as displaying an error message or taking other actions.
          }
        };

        fetchData(params.productId);
      }, [params.productId]);

  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
    return(
        <>
        <div className="cart-box">
        <div className="cart-container">
         <small className="cart-count">{cartCount}</small>
        <FontAwesomeIcon icon={faCartShopping}/>
        </div>
        </div>
        <div className="card">
        <div style={{ width: '70%', margin:"0 auto"}}>
      <Image
        src={product.thumbnail}
        alt="Image Description"
        layout="responsive"
        priority={true}
        width={100}
        height={100}
        // objectFit="cover"

      />
    </div>
    <hr />
    <h3 className="cardTitle">{product.title}</h3>
    <p className="cardText">{product.description}</p>

    <div className="footerCard">

    <button onClick={handleAddToCart}>Add to Cart</button>
    <small className="price">{product.price}</small>
    </div>
        </div>

        </>
    )
}

export default Details
