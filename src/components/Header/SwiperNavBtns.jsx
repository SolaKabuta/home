import LeftArrow from '/images/icon-angle-left.svg'
import RightArrow from '/images/icon-angle-right.svg'
import {useSwiper} from "swiper/react";


function SwiperNavBtns(props) {
    const swiper = useSwiper();
    return (
        <>
        <div
            id={''}
            className={'bg-gray-950 '}>
            <button
                onClick={() => swiper.slidePrev()}>
                <img
                className={''}
                src={LeftArrow} alt={'/'}/>
            </button>
            <button
                onClick={() => swiper.slideNext()}>
                <img
                    src={RightArrow}
                    alt={'/'}/>
            </button>
        </div>
        </>
    );
}

export default SwiperNavBtns;