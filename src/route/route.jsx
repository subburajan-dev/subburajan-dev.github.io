import {Component} from "react"
// import {Header} from "../component/Header"
// import {Profile} from "../component/Profile"
import Home from "../component/Home"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

class AppRoute extends Component{
    render(){
        return <div>
            <Router>
                <Routes>

                    <Route path="/" component={Home}>

                    </Route>

                    </Routes>
            </Router>
            Routing
            </div>
    }
}

export default AppRoute;