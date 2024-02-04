// // // import Swiper core and required modules
// // import React, { useEffect } from 'react';
// // import { Navigation} from 'swiper';
// // import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import styles from "./Carousel.module.css";
// // import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
// // import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

// // const Controls = ({ data }) => {
// //     const swiper = useSwiper();
// //     useEffect(() => {
// //         swiper.slideTo(0)
// //     }, [data]);
// //     return <></>;
// // }


// // function Carousel (data, renderComponent)  {
// //   return (
// //     <div className={styles.wrapper}>
// //     <Swiper
// //     style={{ padding: "0px 20px"}}
// //     initialSlide={0}
// //       // install Swiper modules
// //       modules={[Navigation]}
// //       spaceBetween={40}
// //       slidesPerView={"auto"}
// //       allowTouchMove
// //     >
    
// //     <Controls data={data} />
// //     <CarouselRightNavigation />
// //     <CarouselLeftNavigation />
// //     {data.map((ele) => (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
// //     </Swiper>
// //     </div>
// //   );
// // };

// // export default Carousel;

// // -------------------------------------------------------------------------------------------------------------


// // import React, { useEffect } from "react";
// // import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// // import { Navigation } from "swiper";
// // import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// // import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
// // import styles from "./Carousel.module.css"
// // import "swiper/css";

// // const Controls = ({ data }) => {
// //   const swiper = useSwiper();
// //   useEffect(() => {
// //     swiper.slideTo(0, 1);
// //   }, [data,swiper]);
// //   return <></>;
// // };


// // function Carousel({ data, renderComponent }) {
// //     return (
// //       <div className={styles.wrapper}>
// //         <Swiper
// //           style={{ padding: "0px 20px" }}
// //           initialSlide={0}
// //           module={[Navigation]}
// //           slidePerView={"auto"}
// //           spaceBetween={40}
// //           allowTouchMove
// //         >
// //           <Controls data={data} />
// //           <CarouselLeftNavigation />
// //           <CarouselRightNavigation />
// //           {data.map((item) => (
// //             <SwiperSlide>{renderComponent(item)}</SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>
// //     );
// // }

// // export default Carousel;

// // --------------------------------------------------------------------------------------------------

// // Import React and other necessary modules
// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // Import your custom styles
// import styles from './Carousel.module.css';

// // Import your custom components
// import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
// import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

// // Controls component to handle initial slide
// const Controls = ({ data }) => {
//   const swiper = useSwiper();
//   useEffect(() => {
//     swiper.slideTo(0);
//   }, [data]);

//   return <></>;
// };

// // Carousel component
// const Carousel = ({ data, renderComponent }) => {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: '0px 20px' }}
//         initialSlide={0}
//         modules={[Navigation]}
//         spaceBetween={40}
//         slidesPerView={'auto'}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <CarouselRightNavigation />
//         <CarouselLeftNavigation />

//         {/* Render slides based on data */}
//         {data.map((ele, index) => (
//           <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;

// --------------------------------------------------------------------------------------------------------------

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import React, { useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import styles from './Carousel.module.css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);

    return null;
};

function Carousel({ data, renderComponent }) {
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: '0px 20px' }}
                initialSlide={0}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={'auto'}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselRightNavigation />
                <CarouselLeftNavigation />
                {data.map((ele, index) => (
                    <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;

