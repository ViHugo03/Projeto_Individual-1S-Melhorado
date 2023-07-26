import React from "react";
import Home from '../componentes/Home';
import Letreiro from "../componentes/Letreiro";
import NavBar from "../componentes/NavBar";
import Footer from "../componentes/Footer";

function HomePage() {
    return (
        <>
            <NavBar />
            <Letreiro />
            <Home/>
            <Footer/>
        </>
    );
}

export default HomePage;