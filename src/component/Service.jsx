import ads_icon from '../assets/ads_icon.svg';
import marketing_icon from '../assets/marketing_icon.svg';
import assets from '../assets/assets';


export default function Service({id}) {

    return <section id={id} className='d-flex flex-column gap-4 mt-5'>
        <div>
            <h1 className='mb-2'>How can we help?</h1>
            <p className="fw-light text-s hero-xs-text">From strategy to execution, we craft digital solutions that move <br /> your business forward</p>
        </div>
        <div className="container">
            <div className="d-flex gap-2 gap-md-3 gap-lg-4 mt-lg-4">
                <div className="flex-fill d-flex gap-2 gap-md-4 p-2 p-md-4 rounded align-items-center border">
                    <img src={ads_icon} alt="icon" className='border border-4 w-10 rounded-circle '/>
                    <div className='text-start'>
                        <p className='text-xs hero-xs-text fw-bold'>Advertising</p>
                        <p className="text-xs service-sm-text fw-light">We turn bold ideas into power digital solutions that connect, engage...</p>
                    </div>
                </div>
                <div className="flex-fill border gap-2 gap-md-4 p-2 p-md-4 rounded d-flex align-items-center">
                    <img src={marketing_icon} alt="icon" className='border border-4 w-10 rounded-circle '/>
                    <div className='text-start'>
                        <p className='text-xs hero-xs-text fw-bold'>Content marketing</p>
                        <p className="text-xs service-sm-text fw-light">We turn bold ideas into power digital solutions that connect, engage...</p>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-2 gap-md-3 gap-lg-4  mt-2 mt-md-3 mt-lg-4">
                <div className="flex-fill d-flex gap-2 gap-md-4 p-2 p-md-4 rounded align-items-center border">
                    <img src={assets.content_icon} alt="icon" className='border border-4 w-10 rounded-circle '/>
                    <div className='text-start'>
                        <p className='text-xs hero-xs-text fw-bold'>Content writing</p>
                        <p className="text-xs service-sm-text fw-light">We turn bold ideas into power digital solutions that connect, engage...</p>
                    </div>
                </div>
                <div className="flex-fill border gap-2 gap-md-4 p-2 p-md-4 rounded d-flex align-items-center">
                    <img src={assets.social_icon} alt="icon" className='border border-4 w-10 rounded-circle '/>
                    <div className='text-start'>
                        <p className='text-xs hero-xs-text fw-bold'>Social media</p>
                        <p className="text-xs service-sm-text fw-light">We turn bold ideas into power digital solutions that connect, engage...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}