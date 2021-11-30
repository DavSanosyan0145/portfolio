import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const ReactNativeSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const reactNativeData = [
        {
            name: "Currency App",
            description: "currency exchange calculator",
            used: "Expo, react-native, firebase, (react, firebase for admin panel)",
            github: "https://github.com/DavSanosyan0145/currency_app",
            webPage: "",
            video: "",
            gitClone: "https://github.com/DavSanosyan0145/currency_app.git"
        },
        {
            name: "BadBook",
            description: "simple social app",
            used: "Expo, react-native, node, express, socket, mongoDB(mongoose), firebase",
            github: "https://github.com/DavSanosyan0145/badBook",
            webPage: "",
            video: "",
            gitClone: "https://github.com/DavSanosyan0145/badBook.git"
        },
        {
            name: "AstroApp",
            description: "simple forum app",
            used: "Expo, react-native, firebase, (react, firebase for admin panel)",
            github: "https://github.com/DavSanosyan0145/AstroApp",
            webPage: "",
            video: "",
            gitClone: "https://github.com/DavSanosyan0145/AstroApp.git"
        },
    ]

    return (
        <Swiper
            className="Swiper"
            allowTouchMove={false}
            slidesPerView={1}
            navigation={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true, }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(i) => console.log(i)}
        >
            {
                reactNativeData.map((i, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <SwiperSlideItem data={i} setGitClone={setGitClone} gitClone={gitClone} copyLink={copyLink} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default ReactNativeSwiper;