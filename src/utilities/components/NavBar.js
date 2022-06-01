import '../css/NavBar.css'
import Account from "./AccountImage"
import logo from "../images/logo192.png"

export default function NavBar({image}) {
    return (
        <nav className='nav-bar-style'>
            <img src={logo} alt="👋" className='nav-bar-logo' />
            <p className='nav-bar-title'>HeyChat..</p>
            <div className='account'><Account image={image}/></div>
        </nav>
    );
}
