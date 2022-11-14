import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRocket } from 'react-icons/ai'
import { GrRotateLeft } from 'react-icons/gr'
import { RiInformationLine } from 'react-icons/ri';
import { HiOutlineSupport } from 'react-icons/hi';

const Footer = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className='footer-top'>
        <div className='logo-sign'>
          <div className='logo-container'>
            <AiOutlineRocket className='footer-icons' />
            <div className='logo-text'>
              <h4>Free Shipping</h4>
              <h5>orders $50 or more</h5>
            </div>
          </div>
          <div className='logo-container'>
            <GrRotateLeft className='footer-icons' />
            <div className='logo-text'>
              <h4>Free Returns</h4>
              <h5>within 30 days</h5>
            </div>
          </div>
          <div className='logo-container'>
            <RiInformationLine className='footer-icons' />
            <div className='logo-text'>
              <h4>Get 20% Of 1 Item</h4>
              <h5>when you sign up</h5>
            </div>
          </div>
          <div className='logo-container'>
            <HiOutlineSupport className='footer-icons' />
            <div className='logo-text'>
              <h4>We Support</h4>
              <h5>24/7 amazing services</h5>
            </div>
          </div>
        </div>
        <div className='last-deals' style={{ backgroundImage: "url('img/footer-bg.jpg')" }}>
          <h3>Get The Latest Deals</h3>
          <p>and receive $20 coupon for first shopping</p>
          <form>
            <input type='email' placeholder='Enter your Email Address' />
            <input type='submit' value='Subscribe →' />
          </form>
        </div>
      </div>
      <footer>
        <div className='footer-container'>
          <Nav.Link onClick={() => { navigate('') }}><img src='img/header-logo.png' alt='header-logo' className='footer-logo' /></Nav.Link>
          <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
            accumsan porttitor, facilisis luctus, metus.</p>
          <div className='call-number'>
            <h5>Got Question? Call us 24/7</h5>
            <h3>+0123 456 789</h3>
          </div>
          <div className='payments'>
            <h5>Payment Method</h5>
            <img src='img/payments.png' alt='payments' />
          </div>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>Information</h4>
            <li>About Molla</li>
            <li>How to shop on Molla</li>
            <li>FAQ</li>
            <li>Contact us</li>
            <li>Log in</li>
          </ul>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>Customer Service</h4>
            <li>Payment Methods</li>
            <li>Money-back guarantee!</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>My Account</h4>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;