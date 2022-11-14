import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from './store.js';
import Footer from './Footer.js';
import './Cart_css.css';
import { BsArrowRepeat } from 'react-icons/bs'

function Cart() {

  let state = useSelector((state) => state)
  // console.log(state.cart[0].name);

  // dispatch는  store.js 로 요청보내주는 함수
  let dispatch = useDispatch()
  return (
    <>
      <div className='sub-menu-wrap'>
        <div className='sub-menu-bg' style={{ backgroundImage: 'url(img/page-header-bg.jpg)' }}>
          <h3>Shopping Cart</h3>
          <span>Shop</span>
        </div>
        <div className='menu-index'>
          <div className='container'>
            <ul className='menu-index-container'>
              <li>Home</li>
              <li>&gt;</li>
              <li>Shop</li>
              <li>&gt;</li>
              <li>Shopping Cart</li>
            </ul>
          </div>
        </div>
        <div className='container' id='cart-container-box'>
          <div className='row'>
            <div className='col-lg-9' id='product-name-container'>
              <table className='cart-product-name'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th> </th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    state.cart.map((a, i) =>
                      <tr key={i}>
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].price}</td>
                        <td>
                          <button className='add-btn' onClick={() => {
                            dispatch(addCount(state.cart[i].id))
                          }}>+</button>
                        </td>
                        <td>{state.cart[i].count}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              <div className='coupon-container'>
                <div className='coupon'>
                  <input type='text' placeholder='coupon code' />
                  <button>→</button>
                </div>
                <button className='update'>UPDATE CART<BsArrowRepeat className='repeat'/></button>
              </div>
            </div>
            <div className='col-lg-3'>
              <div id='cart-shipping-container'>
                <table className='cart-shipping'>
                  <thead>
                    <tr><h3>Cart Total</h3></tr>
                    <tr>
                      <th>Subtotal:</th>
                      <th>$997,00</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontSize: '16px', color: '#000', fontWeight: '500', padding: '20px 0' }}>Shipping: </td>
                    </tr>
                    <tr>
                      <td><input type='radio' name='shiping' value='0' />Free Shipping:</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td><input type='radio' name='shiping' value='10' />Standard:</td>
                      <td>$10.00</td>
                    </tr>
                    <tr>
                      <td><input type='radio' name='shiping' value='20' />Express:</td>
                      <td>$20.00</td>
                    </tr>
                    <tr className='table-middle'>
                      <td>Estimate for Your Country<br /><span>Change address</span></td>
                    </tr>
                    <tr className='total-price'>
                      <td>Total:</td>
                      <td>$160,00</td>
                    </tr>
                  </tbody>
                </table>
                <button className='checkbox'>PROCEED TO CHECKOUT</button>
              </div>
              <button className='continue-btn'>CONTINUE SHOPPING<BsArrowRepeat /></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )

}

export default Cart;