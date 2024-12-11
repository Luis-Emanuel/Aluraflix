import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';

function Menu() {
  return (
    <nav className={"Menu"}>
      <a href='/'>
        <img className={"Logo"} src={Logo} alt='Logo do AluraFlix' />
      </a>
    </nav>
  )
}

export default Menu;