// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/beta4hrfm.png',
          src: 'https://beta4.hardrockfm.com',
        },
        {
          title: 'title',
          path: '/vueportfolio.png',
        },
        {
          title: 'title',
          path: '/diskominfo.png',
          src: 'https://diskominfo.soppeng.go.id',
        },
        {
          title: 'title',
          path: '/canephora.png',
          src: 'https://canephoracafegarden.com',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/dk.png',
          src: 'https://digitalkreator.id',
        },
      ],
    },
  ],
};

// next link
import Link from 'next/link';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// import image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={imageIndex}
                  >
                    <a
                      href={image.src ? image.src : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center relative overflow-hidden group"
                    >
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex gap-x-2 items-center text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] transition-all group-hover:translate-y-0 duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
