"use client"
import "./products.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchData } from "../../_Logic/logic";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <Link href={`/Products/${product.id}`} key={product.id}>
          <div className="product-card">
            <div className="product-image">
              <Image
                src={product.images[0]}
                alt="Product Image"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <hr />
            <div className="product-details">
              <p className="product-title">{product.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;