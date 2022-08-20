import React from "react"
import AboutUs from "../components/About/About"
import Author from "../components/Author/Author"
import Header from "../components/Header/Header"
import HomeMain from "../components/HomeMain/HomeMain"
import SpecialMenu from "../components/SpecialMenu/SpecialMenu"
import "./Home.css"
const Home =() =>{

    return (
        <>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Author />
        </>
    )

}

export default Home 