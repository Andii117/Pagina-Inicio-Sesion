import React from "react";

class formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      contrasena: ""
    };
  }

  handleCorreo = (event) => {
    this.setState({
      correo: event.target.value
    });
    console.log(this.state.correo);
  };

  handleContrasena = (event) => {
    this.setState({
      contrasena: event.target.value
    });
    console.log(this.state.contrasena);
  };

  handleSubmit = (event) => {
    console.log("acaba de oprimir el botón submit");
    console.log("este es el correo q ingreso");
    console.log(this.state.correo);
    console.log("esta es la contraseña sin cifrar");
    console.log(this.state.contrasena);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            placeholder="ingrese su correo"
            className="form-control"
            aria-describedby="emailHelp"
            value={this.state.correo}
            onChange={this.handleCorreo}
          />
          <div id="emailHelp" className="form-text">
            Su email personal
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="ingrese su contraseña"
            value={this.state.contrasena}
            onChange={this.handleContrasena}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Recordarme</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default formulario;
