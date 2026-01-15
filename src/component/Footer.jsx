import logo from '../assets/logo.svg';
import assets from '../assets/assets.js';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/Theme.jsx';
import logo_dark from '../assets/logo_dark.svg';

export default function Footer() {
    const {theme} = useContext(ThemeContext);
    useEffect(() => {
        if(theme === 'dark') {
            footer.classList.remove('bg-light');
            footer.classList.add('bg-secondary');
        }else{
            footer.classList.remove('bg-secondary');
            footer.classList.add('bg-light');
        }
    }, [theme])
    

    return <footer id='footer' className='text-start pt-5 bg-light'>
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex flex-column gap-3'>    
                    <div>
                        <img src={theme === 'light' ? logo : logo_dark} alt="logo" className='logo' />
                        <p className='text-s hero-xs-text pt-2 fw-light'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                    </div>
                    <div className='d-flex gap-2 text-s hero-xs-text'>
                        <a href="#">Home</a>
                        <a href="#services">Services</a>
                        <a href="#work">Our work</a>
                        <a href="#testimonial">Testimonial</a>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='fs-6 pt-2 hero-xs-text'>Subscribe to out newsletter</p>
                        <p className='fw-light text-s hero-xs-text' >The latest news, articles, and resources, sent to your inbox weekly.</p>
                    </div>
                    <div>
                        <form className='d-flex gap-2 mt-4'>
                            <input type="text" className="form-control hero-xs-text placeholder-small"  placeholder="Enter your email" />
                            <button className='btn text-s hero-xs-text btn-primary'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        
            <div>
                
                <hr />
                <div className='d-flex pb-3 justify-content-between align-items-center'>
                    <p className='text-xs  fw-light'>Copyright 2025 &copy; agency.ai - All Right Reserved.</p>
                    <div className='d-flex gap-3'>
                        <img src={assets.facebook_icon} alt="facebook icon" width={15} />
                        <img src={assets.twitter_icon} alt="twitter icon" width={15} />
                        <img src={assets.instagram_icon} alt="instagram icon" width={15} />
                        <img src={assets.linkedin_icon} alt="linkedIn icon" width={15} />
                    </div>
                </div>
            </div>
        </div>
    </footer>
}