//import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.scss';

// eslint-disable-next-line react/prop-types
const Drawer = ({ isOpen }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      {/* <button className="drawer__toggle" onClick={toggleDrawer}>
        <span className="drawer__toggle-icon"></span>
      </button> */}
      <div className="drawer__content">
        <ul className="drawer__menu">
          <li className="drawer__menu-item">
          <Link to="/camperas">Camperas</Link>
        </li>
          <li className="drawer__menu-item">
          <Link to="/pantalones">Pantalones</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="/camisas-remeras">Camisas / Remeras</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="/calzados">Calzados</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="/accesorios">Accesorios</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="/sombreros">Sombreros</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
