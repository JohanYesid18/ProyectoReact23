import React from "react";
import { Link } from "react-router-dom";

const Registrar = () => {
    return (
        <div className="login-box">
 
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
    <div className="login-logo">
    <Link to="../../index2.html"><b>Registrar </b>Usuario</Link>
  </div>
      <p className="login-box-msg">Bienvenido, registre sus credenciales</p>
      <form action="../../index3.html" method="post">

        {/* /campo de nombre */}
      <div className="input-group mb-3">
          <input type="name" className="form-control"
           placeholder="name"
           id="name"
           name="name" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        {/* /campo de email */}
        <div className="input-group mb-3">
          <input type="email" className="form-control"
           placeholder="Email"
           id="Email"
           name="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        {/* /campo de contraseña */}
        <div className="input-group mb-3">
          <input type="password" className="form-control"
           placeholder="Password" 
           id="Password"
           name="Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>


        {/* /campo de confiramcion de contraseña */}
        <div className="input-group mb-3">
          <input type="confirmpassword" className="form-control"
           placeholder="confirmpassword" 
           id="confirmpassword"
           name="confirmpassword"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
     
      <div className="social-auth-links text-center mb-3">
        <button type='submit' className="btn btn-block btn btn-light">
          <i className="fa fa-registered" /> Registrar
        </button>
        <Link to={"/"} className="btn btn-block btn btn-light">
          <i class="fa fa-user" /> Iniciar Sesión
        </Link>
        <Link to={"/"} className="btn btn-block btn btn-light">
          <i className="fa fa-reply" /> Regresar
        </Link>
      </div>
      </form>
      {/* /.social-auth-links */}
    </div>
    {/* /.login-card-body */}
  </div>
</div>

    );
}

export default Registrar;