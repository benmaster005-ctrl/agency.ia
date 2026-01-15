import person_icon from '../assets/person_icon.svg';
import email_icon from '../assets/email_icon.svg';
import arrow_icon from '../assets/arrow_icon.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact({id}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            document.querySelector('#alert').classList.add('d-none');
        }, 5000);
        document.querySelector('#alert').classList.remove('d-none');
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return <motion.section 
        id={id} 
        className='container mt-5'
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.6, ease: "easeOut"}}
        viewport={{once: true}}
        >
        <div className='container'>
            <div className='mb-4'>
                <h1>Reach out to us</h1>
                <p className='text-s hero-xs-text fw-light'>Ready to grow your brand? Let's connect and build something  exceptional together.</p>
            </div>
            <div className=" form-group mt-5">
                <form onSubmit={handleSubmit} className='text-s p-0  hero-xs-text'>
                    <div className='d-flex mb-3  gap-2 text-start'>
                        <div className="flex-fill">
                            <label htmlFor="exampleFormControlInput1" className=" form-label m-0">Your name</label>
                            <input type="name" name='name' className="form-control hero-xs-text text-s" id="exampleFormControlInput1" placeholder="Enter your name" value={formData.name} onChange={handleChange}  required/>
                        </div>
                        <div className="flex-fill">
                            <label htmlFor="emailFormControlInput" className="form-label m-0">Email</label>
                            <input type="email" name='email' className="form-control hero-xs-text text-s" id="emailFormControlInput" placeholder="Enter your email"  value={formData.email} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="mb-3  text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label m-0">Message</label>
                        <textarea name='message' className="form-control  text-s" id="exampleFormControlTextarea1" placeholder='Enter your message' rows="3" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="text-start ">
                        <button className="btn px-4 btn-primary rounded-pill d-flex align-items-center gap-1 text-s" type="submit"><span>Submit</span> <img src={arrow_icon} alt=""  width={'12px'}/></button>
                    </div>

                </form>   
            </div>
            
        </div>
    </motion.section>
}