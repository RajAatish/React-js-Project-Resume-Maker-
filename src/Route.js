import React from "react"
import { HashRouter, Route } from "react-router-dom"
import MainPage from "./Project/Resume-Builder/MainPage"
import Acount from "./Project/Resume-Builder/Acount"
import About from "./Project/Resume-Builder/About"
import Test from "./Project/Test/Test"
import Blog from "./Project/API/Blog"
import ImageApi from "./Project/Image-Gallery/ImageApi"
import ContactUs from "./Project/Resume-Builder/ContactUs"
import HomeIconClick from "./Project/Resume-Builder/HomeIconClick"

const Routes = () => {

    return (
        <HashRouter>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/acount" component={Acount} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/imagegallery' component={ImageApi} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/home" component={HomeIconClick} />
          </HashRouter>
    )
}

export default Routes