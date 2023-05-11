import { Link } from "react-router-dom";
import logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Imagen" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;
