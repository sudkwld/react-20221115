import { useState } from "react";
import { Nav } from 'react-bootstrap'
import { useEffect } from "react";
import Footer from './Footer.js';
import './Member.css';
import {BiEdit} from 'react-icons/bi'

function Member() {
  let [tap, setTap] = useState(0);
  return (
    <>
      <div className='sub-menu-wrap'>
        <div className='sub-menu-bg' style={{ backgroundImage: 'url(img/page-header-bg.jpg)' }}>
          <h3>My Account</h3>
          <span>Shop</span>
        </div>
        <div className='menu-index'>
          <div className='container'>
            <ul className='menu-index-container'>
              <li>Home</li>
              <li>&gt;</li>
              <li>Shop</li>
              <li>&gt;</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <ul className="account-menu" variant="tabs" defaultActiveKey="link0">
                  <li onClick={() => { setTap(0) }} eventKey="link0">Dashboard</li>
                  <li onClick={() => { setTap(1) }} eventKey="link0">Orders</li>
                  <li onClick={() => { setTap(2) }} eventKey="link0">Downloads</li>
                  <li onClick={() => { setTap(3) }} eventKey="link0">Address</li>
                  <li onClick={() => { setTap(4) }} eventKey="link0">Account Details</li>
                  <li>Sign Out</li>
              </ul>
            </div>
            <div className='col-lg-9'>
              <TabContent tap={tap}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

function TabContent({tap}) {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => { setFade('end') }, 10)
    return () => {
      setFade('')
    }
  }, [tap])
  return(
    <div className={'start' + fade}>
      {[<>
          <div className="account-text">
            <h4>Hello <span className="bold">User</span> 
            (not <span className="bold">User</span>? <span className="green">Log Out</span>)</h4>
            <p>From your account dashboard you can view your <span className="green-text">recent orders</span>, 
              manage your <span className="green">shipping and billing addresses</span>, and <span className="green">edit your password 
              and account details.</span></p>
          </div>
        </>,
        <>
          <div className="account-text">
            <p>No order has been made yet.</p>
            <button>GO SHOP →</button>
          </div>
        </>,
        <>
          <div className="account-text">
            <p>No downloads available yet.</p>
            <button>GO SHOP →</button>
          </div>
        </>,
        <>
          <div className="account-text-area">
            <p>The following addresses will be used on the checkout page by default.</p>
            <div className="shipping-box">
              <ul>
                <li><h5>Billing Address</h5></li>
                <li>User Name</li>
                <li>User Company</li>
                <li>John str</li>
                <li>New York, NY 10001</li>
                <li>1-234-987-6543</li>
                <li>yourmail@mail.com</li>
                <li className="edit">Edit <BiEdit/></li>
              </ul>
            </div>
            <div className="shipping-box">
              <ul>
                <li><h5>Shipping Address</h5></li>
                <li>You have not set up this type of address yet.</li>
                <li className="edit">Edit <BiEdit/></li>
              </ul>
            </div>
          </div>
        </>,
        <>
          <div className="account-text">
            <div className="name">
              <div className="name-area">
                <h5>First Name *</h5>
                <input type='text'/>
              </div>
              <div className="name-area">
                <h5>Last Name *</h5>
                <input type='text'/>
              </div>
            </div>
            <h5>Display Name *</h5>
            <input type='text' />
            <p>This will be how your name will be displayed in the account section and in reviews</p>
            <h5>Email Adress *</h5>
            <input type='email' />
            <h5>Current password (leave blank to leave unchanged)</h5>
            <input type='password' />
            <h5>New password (leave blank to leave unchanged)</h5>
            <input type='password' />
            <h5>Confirm new password</h5>
            <input type='password' /><br />
            <button className="save-changes">SAVE CHANGES →</button>
          </div>
        </>][tap]}
    </div>
  )
}
export default Member;