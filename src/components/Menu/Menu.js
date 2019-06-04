import React from 'react';
import "./Menu.css";
import Logo from '../../assets/pokemon_logo.png';
import LoginImg from '../../assets/pokeball.png';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media,
  Label
} from 'reactstrap';
import HomePage from '../HomePage/HomePage';


export default class Menu extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.clear();
    this.forceUpdate();
  }

  localStorageUpdated(){
    console.log("XD");

}

  render() {
    return (
      <>
        <Navbar className="navbar" color="dark" expand="md">
            <NavbarBrand exec to="/" className="brand">
              <Media className="logo" src={Logo} alt="pokemon_logo" />
              <Label className="logo-label">pokemon idź</Label>
            </NavbarBrand>

          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <div className="login">
                {localStorage.getItem('id') == null ?
                  <>
                    <Link exec to='/login'>
                      <NavLink className="login-link">logowanie</NavLink>

                    </Link>
                    <Media className="login-img" src={LoginImg} alt="login_image" />
                    <Link exec to='/register'>
                      <NavLink className="register-link">rejestracja</NavLink>

                    </Link>
                  </>
                  :
                  <>
                    <NavLink exec to='/user-team' className="login-name">{localStorage.getItem('login')}</NavLink>
                    <Media className="login-img" src={LoginImg} alt="login_image" />
                    <NavLink exec to='/' className="log-out-link" onClick={this.handleLogout}>wyloguj</NavLink>
                    </>
                }
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}