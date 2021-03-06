import Formulario from "./components/formulario";
import "./styles/App.css";

export default function App() {
  return (
    <div className="Header">
      <h1 className="Loggin">Iniciar seseión</h1>
      <p className="info">Para iniciar sesión ingrese su correo y contraseña</p>
      <Formulario />
    </div>
  );
}
