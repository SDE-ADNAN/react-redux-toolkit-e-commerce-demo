import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { remove } from '../Store/cartSlice'

const Cart = () => {
  const products = useSelector((state)=>state.cart)
  const dispatch= useDispatch();
  const handleRemove=(product)=>{
      dispatch(remove(product.id))
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              onClick={() => {
                handleRemove(product);
              }}
              className="btn"
            >
              Delete from  Cart
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default Cart