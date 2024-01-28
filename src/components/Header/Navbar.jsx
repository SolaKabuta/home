import IconHamburger from '/images/icon-hamburger.svg';
import IconClose from '/images/icon-close.svg';

import {useState} from "react";

// OPEN BTN
const handleClick = () => {
    const burgerMenu = document.getElementById('burgerMenu')
    const activeMenu = document.getElementById('activeMenu')
    activeMenu.classList.remove("hidden")
    activeMenu.classList.add("ease-in-out duration-600")


}
// CLOSE BTN
const x = () => {
    const iconClose = document.getElementById('iconClose')
    activeMenu.classList.remove('block')
    activeMenu.classList.add('hidden')



}

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

    return (


        <>
            <div
                id={'Menu'}
                className={'flex justify-center'}>
                <div
                    className={'absolute top-10 z-50'}>
                    <p
                        className={'text-3xl text-white font-semibold'}>
                        room
                    </p>
                </div>
                {/*BURGER ICON*/}
                <a
                    className={'z-50 '}
                    id={'burgerMenu'}
                    href={'#'}
                    onClick={handleClick}>
                    <img
                        className={'absolute left-20 top-[9vw]'}
                        src={IconHamburger}
                        alt={'/'}/>
                </a>
            </div>
            {/*ACTIVE*/}
            <div
                id={'activeMenu'}
                className={'absolute bg-white w-full h-36 ease-in-out duration-700 hidden z-50'}>
                <a
                    id={'iconClose'}
                    href={'#'}>
                    <img
                    className={'relative top-[11vw] left-10 scale-125'}
                    src={IconClose}
                    alt={'icon close'}
                    onClick={x}/>
                </a>
                <ul
                    className={'flex justify-center gap-10 lowercase font-bold py-10 relative left-20'}>
                    <a href={'#'}><li>Home</li></a>
                    <a href={'#'}><li>Shop</li></a>
                    <a href={'#'}><li>About</li></a>
                    <a href={'#'}><li>Contact</li></a>
                </ul>
            </div>
        </>
    );
};

export default Navbar;