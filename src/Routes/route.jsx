import Navigation from "Layouts/Navigation"
import Profile from "Components/Profile"
import Home from "Components/Home"
import About from "Components/About"
import Resume from "Components/Resume"
import Footer from "Layouts/Footer"
// import {Navigation,Footer} from "Layouts" 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const AppRoute=()=>{
        return <div>
            <Router>
                <Navigation />
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