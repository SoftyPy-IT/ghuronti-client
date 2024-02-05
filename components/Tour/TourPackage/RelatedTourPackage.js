import React from 'react';
import style from './TourPackage.module.css'
import Image from 'next/image';
import india from "../../../public/assets/tourImage7.jpg";
import india2 from "../../../public/assets/tourImage8.jpg";
import india3 from "../../../public/assets/tourImage9.jpg";
import india4 from "../../../public/assets/tourImage10.jpg";
import india5 from "../../../public/assets/tourImage11.jpg";
import india6 from "../../../public/assets/tourImage12.jpg";
import india7 from "../../../public/assets/tourImage13.jpg";
import india8 from "../../../public/assets/tourImage8.jpg";
import india9 from "../../../public/assets/tourImage5.jpg";
import india10 from "../../../public/assets/tourImage6.jpg";
import india11 from "../../../public/assets/tourImage3.jpg";
import india12 from "../../../public/assets/destination5.jpeg";
import destination11 from "../../../public/assets/hotel.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import { StarOutline } from '@mui/icons-material';

const RelatedTourPackage = () => {
    var settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        speed: 7000,
        autoplaySpeed: 7000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
       <section>
            <div className={style.packageWrap}>
                <Slider  {...settings}>
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>
                <Link href='#'>
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india2}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div> 
                </Link>
                  <Link href='#'>
                  <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india3}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>  
                  </Link>
                <Link href='#'>
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india4}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>  </Link>
                 <Link href='#'>
                 <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india5}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>
                  </Link>
               
                  <Link href='#'>
                  <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india6}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div> 
                  </Link>
                  <Link href='#'>
                  <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india7}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div> 
                  </Link>
                 <Link href='#'>
                 <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india8}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div> 
                 </Link>
                 <Link href='#'>
                 <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india9}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div> 
                 </Link>
               
                  <Link href='#'> 
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india11}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>
                </Link>
                 <Link href='#'>
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india11}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>  
                </Link>
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={destination11}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6 className="text-xl font-bold">Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>   
                <Link href='#'>
                <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india10}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div> 
                   </Link>
                   <Link href='#'>
                   <div className={style.package}>
                   <div className={style.packageImgWrap}>
                   <Image
                   loading="lazy"
                    alt='tour'
                    src={india12}
                    className={style.packageImg}
                    />
                   </div>
                  <div className={style.packageContent}>
                  <h6>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h6>
                   <div className="flex my-2">
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                    <StarOutline className={style.star}/>
                   </div>
                   <small className='block mb-2'>Transportation Services</small> 
                   <strong > from $666.67 per adult (price varies by group size)</strong>
                  </div>
                </div>
                   </Link>
               
                </Slider>
            </div>
       </section>
       
    );
};

export default RelatedTourPackage;