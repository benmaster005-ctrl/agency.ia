import './App.css';
import Contact from './component/Contact';
import Hero from "./component/Hero";
import Service from "./component/Service";
import Team from './component/Team';
import Work from "./component/Work";

function App() {

    return <div className="container text-center mb-5">
        <Hero  />
        <Service id='services' />
        <Work id='our-work' />
        <Team/>
        <Contact id='contact' />
    </div>
}
export default App;
