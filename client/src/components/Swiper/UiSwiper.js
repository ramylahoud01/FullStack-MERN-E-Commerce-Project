import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
function UiSwiper(props) {
  const theme = useTheme();
  const extraSmallScreen = useMediaQuery(theme.breakpoints.between('xs','sm'))
  const smallScreen = useMediaQuery(theme.breakpoints.between('sm','md'));
  const mediumScreen = useMediaQuery(theme.breakpoints.between('md','lg'))
  const largeScreen = useMediaQuery(theme.breakpoints.between('lg','xl'))
  const exraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <Swiper
      style={{paddingTop:'40px',paddingLeft:'10px'}}
      modules={[Navigation,Pagination,Autoplay]}
      slidesPerView={extraSmallScreen ? 3 :smallScreen ? 4 :largeScreen?5 :mediumScreen ? 4 :6 }
      spaceBetween={extraSmallScreen?0:80} // Adjust the spacing value as per your requirement
      
      scrollbar={{ draggable: true }}
      pagination={{ clickable:true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {props.data.map((data) => (
        <SwiperSlide key={data._id}>
          <img
            alt={data.title}
            src={`http://localhost:8000/${data.imageUrl}`}
            style={{
              height:extraSmallScreen ?'110px' :smallScreen ? '160px' :largeScreen ?'200px' :exraLargeScreen?'220px':'180px',
              width:extraSmallScreen ?'110px' :smallScreen ? '160px':largeScreen ?'200px' :exraLargeScreen?'220px':'180px',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default UiSwiper;
