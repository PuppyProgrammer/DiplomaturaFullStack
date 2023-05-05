//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pendiente" : isActive ? "activo" : ""
                    } to="/">Principal</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pendiente" : isActive ? "activo" : ""
                    } to="/laboratorio">Laboratorio</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pendiente" : isActive ? "activo" : ""
                    } to="/wanted">Wanted</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pendiente" : isActive ? "activo" : ""
                    } to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;