import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const ReactSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const reactData = [
        {
            name: "Hello World",
            description: "simple social network",
            used: "HTML, CSS, Javascript, react, mongoDB(mongoose), node, express",
            github: "https://github.com/DavSanosyan0145/Hello_World",
            webPage: "https://hello-world-eight-rho.vercel.app/",
            video: "",
            gitClone: "https://github.com/DavSanosyan0145/Hello_World.git"
        },
        {
            name: "portfolio",
            description: "portfolio project",
            used: "HTML, CSS, Javascript, react",
            github: "https://github.com/DavSanosyan0145/portfolio",
            webPage: "https://portfolio-vert-tau-42.vercel.app/",
            video: "",
            gitClone: "https://github.com/DavSanosyan0145/portfolio.git"
        },
        {
            name: "Learn_Redux",
            description: "redux learn project",
            used: "react, redux, bootstrap",
            github: "https://github.com/DavSanosyan0145/learn_redux",
            webPage: "https://redux-part-2.vercel.app/",
            video: "",
            gitClone: "https://github.com/DavSanosyan0145/learn_redux.git"
        },
    ];

    return (

        <Swiper
            className="Swiper"
            allowTouchMove={false}
            slidesPerView={1}
            navigation={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(i) => console.log(i)}
        >
            {
                reactData.map((i, index) => {
                    return (
                        <SwiperSlide key={index}  >
                            <SwiperSlideItem data={i} setGitClone={setGitClone} gitClone={gitClone} copyLink={copyLink} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default ReactSwiper;