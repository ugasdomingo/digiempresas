//Import Tools
import { Outlet, Link } from "react-router-dom";
import './layout.css';

//Import Compponents
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
    return (
        <>
            <img className="img-hero" src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fondo" />
            <div className="container-layout">
                <h2><Link to={'/'}>Digiempresas</Link></h2>
                <div><Outlet /></div>
                <div><NavBar /></div>
                <div><Footer /></div>
            </div>
        </>
    )
}

export default Layout