import Nav from "./Nav";
import Search from "./SearchForm";
import Profile from "./Profile";
import BurgerMenu from "./BurgerMenu";
import logo from '../../assets/Aromatika_logo.png';

import './styles.scss';

const Header = () => (
        <header  >
                <div className="header">
                        <div className="header-logo" >
                                <a href="/"><img src={logo} className="header-logo-img" alt="Logo Aromatika" /></a>
                        </div>
                        <Nav />
                        <div className='header-icons'>
                                <Search />
                                <Profile />
                        </div>
                </div>
                <div className="header-mobile">
                        <BurgerMenu />
                        <div className="header-mobile-logo" >
                                <a href="/"><img src={logo} className="header-mobile-logo-img" alt="Logo Aromatika" /></a>
                        </div>
                        <div className='header-mobile-icons'>
                                <Search />
                                <Profile />
                        </div>
                </div>
        </header>
);

export default Header;
