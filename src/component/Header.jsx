import { useCallback, useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import moon_icon from '../assets/moon_icon.svg';
import menu_icon from '../assets/menu_icon.svg';
import close_icon from '../assets/close_icon.svg';
import arrow_icon from '../assets/arrow_icon.svg';
import { ThemeContext } from '../context/Theme';
import logo_dark from '../assets/logo_dark.svg';
import sun_icon from '../assets/sun_icon.svg';
import menu_icon_dark from '../assets/menu_icon_dark.svg';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [burgerIcon, setBurgerIcon] = useState(false);
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    const openSideBar = () => {
        setBurgerIcon(!burgerIcon);
        nav.classList.toggle('active');
    }
    const closeSideBar = () => {
        document.querySelectorAll('nav li').forEach((li) => {
            li.addEventListener('click', () => {
                nav.classList.remove('active');
                setBurgerIcon(!burgerIcon);
                
            })
        })

        nav.classList.remove('active');
        setBurgerIcon(false)
    }

    const handleSize = useCallback((e) => {
        if(e.matches)
            setIsMobile(true);
        else
            setIsMobile(false);
    }, []);

    useEffect(() => {
        const media = window.matchMedia('(max-width: 765px)');

        setIsMobile(media.matches);

        media.addEventListener('change', handleSize);
        return () => {
            media.removeEventListener('change', handleSize);
        }
    }, []);
    
    useEffect(() => {
        theme === 'dark' ? nav.classList.add('bg-dark') : nav.classList.remove('bg-dark');
    }, [theme])

    return <nav id='nav' className='py-2 container d-flex justify-content-between align-items-center'>
        <img src={theme === 'light' ? logo : logo_dark} className='w-25 w-md-full' alt="logo" />
        <ul id='menu' onClick={closeSideBar} className='menu list-unstyled m-0 d-flex gap-3'>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#our-work">OurWork</a></li>
            <li><a href="#contact">Contact</a></li>
            {isMobile && <button id='connectBtn' className="btn btn-primary pe-4 ps-4  text-s rounded-pill d-flex align-items-center gap-1"><p>connect  </p>  <img src={arrow_icon} width={'14px'}/></button>}
        </ul>
        <div className='justify-content-between theme-div d-flex gap-2 align-items-center'>
            <img onClick={toggleTheme} src={theme === 'light' ? moon_icon : sun_icon} alt="theme" className='border rounded-circle p-1' id='theme-icon' />
            {!isMobile && <button id='connectBtn' className="btn btn-primary pe-4 ps-4 text-s rounded-pill ry d-flex align-items-center"><p>connect  </p> <img src={arrow_icon} width={'14px'}/></button>}
            <span onClick={openSideBar} id="burger">
                <img src={burgerIcon ? close_icon : (theme === 'light' ? menu_icon : menu_icon_dark)} alt="" />
            </span>

        </div>
    </nav>
}