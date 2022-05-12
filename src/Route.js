import React from "react"
import { HashRouter, Route } from "react-router-dom"
import MainPage from "./Project/Resume-Builder/MainPage"
import Acount from "./Project/Resume-Builder/Acount"
import About from "./Project/Resume-Builder/About"
import Test from "./Project/Test/Test"
import Blog from "./Project/API/Blog"
import ImageApi from "./Project/Image-Gallery/ImageApi"

const Routes = () => {

    return (
        <HashRouter>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/Acount" component={Acount} />
            <Route exact path="/About" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/imagegallery' component={ImageApi} />
          </HashRouter>
    )
}

export default Routes