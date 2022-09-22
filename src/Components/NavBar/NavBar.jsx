
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navBar">
            <div className='tituloPag'>
            <h2>
                <strong>Mi Ecommerce</strong>
            </h2>
            <CartWidget/>
            </div>
            <ul className='menuNav'>
                <li> <a href="#">Inicio</a> </li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>        
    );
}

export default NavBar;