import { useEffect, useState } from "react";
import { teamData } from "../assets/assets";

export default function Team() {
    const [teamInfo, setTeamInfo] = useState([]);

    useEffect(() => {
        setTeamInfo(teamData);
    }, [])

    return <section className="pt-5 ">
        <div>
            <div>
                <h1>Meet the Team</h1>
                <p className="text-s fw-light hero-xs-text">A passionate team of digital experts dedicated to your <br /> brand's success.</p>
            </div>
            <div className="container mt-4 text-start">
                <div className="row">
                {teamInfo.slice(0, 4).map((team) => (
                    <div key={team.name} className="col-6 col-lg-3 mt-4">
                    <div className="d-flex border align-items-center rounded h-67 gap-2 p-2 ">
                        <img src={team.image} alt="photo" className="profile-img rounded-circle" width={'30px'}/>
                        <div className="d-flex flex-column gap-1">
                            <p className="text-xs hero-xs-text">{team.name}</p>
                            <p className="text-xs service-sm-text fw-light">{team.title}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                <div className="row ">
                {teamInfo.slice(4, 8).map((team) => ( 
                    <div key={team.name} className="col-6 col-lg-3  mt-4">
                    <div  className="d-flex border rounded align-items-center h-67 gap-2 p-2 ">
                        <img src={team.image} alt="photo" className="profile-img rounded-circle" width={'30px'}/>
                        <div className="d-flex flex-column gap-1">
                            <p className="text-xs">{team.name}</p>
                            <p className="text-xs fw-light">{team.title}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    </section>
}