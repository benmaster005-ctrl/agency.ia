import work_mobile_app from '../assets/work_mobile_app.png';
import work_dashboard_management from '../assets/work_dashboard_management.png';
import work_fitness_app from '../assets/work_fitness_app.png';

export default function Work({id}) {

    return <div id={id} className="container d-flex flex-column gap-4 mt-5">
        <div>
            <h1 className='mb-2'>Our latest work</h1>
            <p className="fw-light text-s hero-xs-text">Browse our portfolio of innovation digital projects that showcase <br /> creativity, performance, and results.</p>
        </div>
        <div className="container d-flex gap-3 card-group text-start">
            <div className="card col border border-0 " style={{width: '18rem'}}>
                <img src={work_mobile_app} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-s hero-xs-text">Mobile app marketing</h5>
                    <p className="card-text fw-light text-xs">We turn bold ideas into power digital  solutions that connect...</p>
                </div>
            </div>
            <div className="card col border border-0" style={{width: '18rem'}}>
                <img src={work_dashboard_management} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title text-s hero-xs-text">Dashboard management</h5>
                    <p className="card-text fw-light text-xs service-sm-text">We turn bold ideas into power digital solutions that connect...</p>
                </div>
            </div>
            <div className="card col border border-0" style={{width: '18rem'}}>
                <img src={work_fitness_app} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-s hero-xs-text">Fitness app promotion</h5>
                    <p className="card-text fw-light text-xs service-sm-text">We turn bold ideas into power digital solutions that connect...</p>
                </div>
            </div>
        </div>
    </div>
}