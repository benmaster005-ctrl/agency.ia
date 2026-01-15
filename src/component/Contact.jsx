import person_icon from '../assets/person_icon.svg';
import email_icon from '../assets/email_icon.svg';
import arrow_icon from '../assets/arrow_icon.svg';

export default function Contact({id}) {


    return <section id={id} className='container mt-5'>
        <div className='container'>
            <div className='mb-4'>
                <h1>Reach out to us</h1>
                <p className='text-s hero-xs-text fw-light'>Ready to grow your brand? Let's connect and build something  exceptional together.</p>
            </div>
            <div className=" form-group mt-5">
                <form className='text-s p-0  hero-xs-text'>
                    <div className='d-flex mb-3  gap-2 text-start'>
                        <div className="flex-fill">
                            <label htmlFor="exampleFormControlInput1" className=" form-label m-0">Your name</label>
                            <input type="name" className="form-control hero-xs-text text-s" id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div className="flex-fill">
                            <label htmlFor="emailFormControlInput" className="form-label m-0">Email id</label>
                            <input type="email" className="form-control hero-xs-text text-s" id="emailFormControlInput" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="mb-3  text-start">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label m-0">Message</label>
                        <textarea className="form-control  text-s" id="exampleFormControlTextarea1" placeholder='Enter your message' rows="3"></textarea>
                    </div>
                    <div className="text-start ">
                        <button className="btn px-4 btn-primary rounded-pill  text-s" type="submit">Submit <img src={arrow_icon} alt=""  width={'12px'}/></button>
                    </div>

                </form>   
            </div>
            
        </div>
    </section>
}