import assets from '../assets/assets.js';
import {company_logos} from '../assets/assets.js';

export default function Hero({id}) {

    return <section id={id} className='d-flex pt-5 gap-2 justify-content-center flex-column'>
        <div className='d-flex justify-content-center '>
            <div className='group-profile d-flex align-items-center  border rounded-pill border-secondary-subtle'>
                <img src={assets.group_profile} alt="group profile" width={'25%'}/>
                <p className='text-xs'>Trusted by 10k+ people</p>
            </div>
        </div>
        <div className='mb-4'>
            <p className='display-4 text-sm  fw-medium'>Turning imagination into <br /> <span className='text-primary'>digital</span> impact.</p>
            <p className='fw-light hero-xs-text text-s'>Creating meaningful connections and turning big ideas
            <br />into interactive digital experiences</p>
        </div>

        <img src={assets.hero_img} alt="hero image" className='container' />

        <div className='mt-4'>
            <p className='text-s hero-xs-text fw-light'>Trusted by Leading Companies</p>
        </div>
        <div className='container row company-logo' >
            <div className="col-2"><img src={company_logos.coinbase_logo} alt="coinbase_logo" className=''/></div>
            <div className="col-2"><img src={company_logos.google_logo} alt="google_logo"/></div>
            <div className="col-2"><img src={company_logos.rakuten_logo} alt="rakuten_logo" /></div>
            <div className="col-2"><img src={company_logos.microsoft_logo} alt="microsoft_logo" /></div>
            <div className="col-2"><img src={company_logos.airbnb_logo} alt="airbnb_logo" /></div>
            <div className="col-2"><img src={company_logos.zoom_logo} alt="zoom_logo" /></div>
        </div>        
    </section>
}