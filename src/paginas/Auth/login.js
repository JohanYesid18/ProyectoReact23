import React from "react";
import { Link } from "react-router-dom";
import '../../css/login.css';
import { useState } from "react";

const Login = ({setUser}) => {

 const [Email, setEmail] = useState("");
 const [Password, setPassword] = useState("");
 const [Error, setError] =  useState(false);

const hanndleSubmit = (e) =>{
  e.preventDefault()

  if (Email === "" || Password === ""){
    setError(true)
    return
  }

  setError(false)

  setUser(Email)


}

    return (
  <div className="login-box">
    
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
    <div className="login-logo">
    <Link to="../../index2.html"><b>Iniciar </b>Sesión</Link>
  </div>
      <p className="login-box-msg">Bienvenido, ingrese sus credenciales:</p>
      <form action="../../index3.html" method="post" onSubmit={hanndleSubmit}> 
   
        <div className="input-group mb-3">
          <input type="email" className="form-control"
           value={Email}
           onChange={e => setEmail(e.target.value)}
           placeholder="Email"
           id="Email"
           name="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control"
           value={Password}
           onChange={e => setPassword(e.target.value)}
           placeholder="Password" 
           id="Password"
           name="Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
     
        <div className="social-auth-links text-center mb-3">
      <Link to={"Home"} className="btn btn-block btn-light">
          <i className="fa fa-registered" /> Ingresar
        </Link>
        <Link to={"register"} className="btn btn-block btn-light">
          <i className="fa fa-registered" /> Crear Cuenta
        </Link>
      </div>
      </form>
      {Error && <p>Todos los campos son obligatorios</p>}
      {/* /.social-auth-links */}
    </div>
    {/* /.login-card-body */}
  </div>
</div>


    );
}

export default Login;