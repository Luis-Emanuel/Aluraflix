import Logo from '../../assets/img/LogoMain.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
  return (
    <nav className={"Menu"}>
      <a href='/'>
        <img className={"Logo"} src={Logo} alt='Logo do AluraFlix' />
      </a>
      <ButtonLink className='ButtonLink' href='/'>
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}

export default Menu;