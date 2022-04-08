import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { fetchProducts, STATUSES } from "../Store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const {data:products,status} = useSelector((state)=>state.products)

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();

    dispatch(fetchProducts())
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    console.log(product);
  };


  if(status === STATUSES.LOADING){
    return(
      <h1 style={{color:"red"}}>LOADING...</h1>
    )
  }else if(status === STATUSES.IDLE){
    return (
      <div className="productsWrapper">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button
                onClick={() => {
                  handleAdd(product);
                }}
                className="btn"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    );
  }else{
    return(
      <h1>SOMETHING WENT WRONG</h1>
    )
  }

};

export default Products;
