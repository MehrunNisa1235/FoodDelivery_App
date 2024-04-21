
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                    <img src={assets.mehar} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos laudantium voluptate doloribus quam dolorem officia at nemo. Maiores esse nesciunt, veritatis, quia quos aperiam ipsa amet labore ducimus, dolore nam.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>
            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>


            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 7061258725</li>
                    <li>mehrunnisa1235@gmail.com</li>
                </ul>
            </div>

        </div>

        <hr />
        {/* <p className='footer copyright'>
            Copyright 2024 @ MeharFood.com - All copyright
        </p> */}

        <p>Copyright 2024 @ MeharFood.com - All copyright</p>


    </div>
  )
}

export default Footer