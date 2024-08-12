// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import { RiTeamFill } from 'react-icons/ri';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RiTeamFill />,
    title: 'Teamwork',
    description: 'Social development are important to build chemistry',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Always thinking about design for eyes catching',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Build, Create and Maintenance',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Make a website excist in Search Engine',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-kg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hove:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="tex-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
