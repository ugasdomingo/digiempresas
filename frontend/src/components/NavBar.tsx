import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink
                to={'/paginas-web'}
                className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
                páginas web
            </NavLink>
            <NavLink
                to={'/aplicaciones'}
                className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
                aplicaciones
            </NavLink>
            <NavLink
                to={'/marketing-digital'}
                className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
                marketing digital
            </NavLink>
            <NavLink
                to={'/conocenos'}
                className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
                conócenos
            </NavLink>
        </div>
    )
};

export default NavBar