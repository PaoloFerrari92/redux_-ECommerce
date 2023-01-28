import React from 'react'
import {Link} from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up Newsletter </h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group ">
                <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Your Email Address"
                aria-label="Your Email Address" 
                aria-describedby="basic-addon2"
                 />
                  <span className="input-group-text p-3" id="basic-addon2">
                    Subscribe
                  </span>
              </div>
            </div>
         </div> 
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact US</h4>
              <div>
                <address className='text-white fs-6'>
                  hno :123 New Vill Chopap, <br /> Sonipat, Haryana <br />
                  ZipCode :123456
                </address>
                <a 
                href="tel: +39 333 123 1234"
                className='mt-4 d-block mb-1 text-white'
                >
                  +39 333 123 1234
                </a>
                <a 
                href="mailto: mail@mail.com"
                className='mt-4 d-block mb-0 text-white'
                >
                  mail@mail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href="">
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href="">
                    <BsInstagram  className='fs-4' />
                  </a>
                  <a className='text-white' href="">
                    <BsGithub  className='fs-4' />
                  </a>
                  <a className='text-white' href="">
                    <BsYoutube  className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">About US</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Link</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
              <div className='col-12'>
                <p className='text-center mb-0 text-white'>
                  &copy; {new Date().getFullYear()}; Powered by Paolo
                </p>
              </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer