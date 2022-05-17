import Header from "../component/Header"
import Profile from "../component/Profile"
import Home from "../component/Home"
import About from "../component/About"
import Resume from "../component/Resume"
import Footer from "component/Footer"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

const AppRoute=()=>{
        return <div>
            <Router>
                <Header />
                <Routes>

                    <Route exact path="/" element={<Home/>}/>

                    <Route path="project" element={<Profile/>}/>
                    
                    <Route path="about" element={<About/>}/>

                    <Route path="resume" element={<Resume/>}/>   
                                     
                    <Route path="*" element={<div>404 not found</div>}/>

                    </Routes>
                    <Footer/>
            </Router>
            
            </div>
    }
export default AppRoute;