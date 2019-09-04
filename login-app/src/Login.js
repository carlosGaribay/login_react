import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from './mb_logo.png';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correo: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { correo, password } = this.state;
    if (correo && password) {
      alert("revisar");
    }
  }

  render() {
    const { correo, password, submitted } = this.state;
    return (
      <Router>
        <div>
          <form name="form" className="form" onSubmit={this.handleSubmit}>
            <img src={logo} alt="Multiburó" />
            <div className={'form_group'}>
              <span><FontAwesomeIcon className="icon" icon={faEnvelope}/></span>
              <input type="text" className="form_control" name="correo" value={correo} placeholder="Correo" onChange={this.handleChange} />
              {submitted && !correo &&
                <div className="campo_faltante">Correo es requerido</div>
              }
            </div>
            <div className={'form_group'}>
              <span><FontAwesomeIcon className="icon" icon={faLock}/></span>
              <input type="password" className="form_control" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
              {submitted && !password &&
                <div className="campo_faltante">Password es requerido</div>
              }
            </div><br/>
            <div>
              <input className="button_login" type="submit" value="Ingresar"/>
            </div><br/>
            <div className="registro">
              <label>¿Aún no tienes cuenta?</label>
              <Link to="/register" className="link_registro">Registrate</Link>
            </div>
          </form>
        </div>
      </Router>
    );
  }
}

export default Login;