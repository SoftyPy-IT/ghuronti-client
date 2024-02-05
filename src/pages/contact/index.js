import React from "react";
import Nav from "../../../components/NavBarr/Nav";
import Footer from "../../../components/Footer/Footer";
import style from "./contact.module.css";
import { Helmet } from "react-helmet-async";
import phone from "../../../public/assets/phone.png";
import contact from "../../../public/assets/contact4.png";
import Image from "next/image";
import { FaFacebookF, FaPhoneAlt,FaEnvelope,FaTwitter, FaUsers,FaPlane } from "react-icons/fa";
import Iframe from "react-iframe";
const index = () => {
  return (
    <section >
      <Helmet>
        <title>Ghuronti || Contact </title>
      </Helmet>
      <Nav />
      <section className={style.contactUsWrap}>
        <div className={style.contact}>
          <div className={style.contactText}>
            <div className={style.contactTextLeft}>
              <div className="flex items-center">
              <FaPlane className="text-5xl font-bold mr-2"/>
             <div>
             <h2 className="text-3xl font-bold ">Looking For More?</h2>
              <span className="mt-2">Booking & package...!</span>
             </div>
              </div>
            </div>
            <div className={style.contactTextRight}>
              <div className="flex items-center">
                <Image alt="phone" src={phone} className=" w-20" />
                <div className="ml-3">
                  <h2 className="text-3xl font-bold capitalize">
                    Need assistance? call us 24/7
                  </h2>
                  <span className="mt-2">+88 01885071488</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={style.contactInfoWrap}>
      <section className={style.getInTouch}>
        <div className={style.getInTouchLeft}>
          <div className={style.getInTouchHead}>
            <p className="text-xl font-bold uppercase">Reach & Contact us</p>
            <h2 className="text-4xl font-bold uppercase my-2">Get in touch </h2>
            <p className="mb-3">
              We would love to talk about how we can work together. Send us a
              message below and we will respond as soon as possible.
            </p>
          </div>
          <form>
            <div className={style.formControl}>
                <label> Name </label>
                <input className={style.inputField} type="text" placeholder="Enter Your Full Name " />
            </div>
            <div className={style.formControl}>
                <label> Email </label>
                <input className={style.inputField} type="text" placeholder="Enter Your Email " />
            </div>
            <div className={style.formControl}>
                <label> Phone Number </label>
                <input className={style.inputField} type="text" placeholder="Enter Your Phone Number " />
            </div>
            <div className={style.formControl}>
                <label> Message </label>
               <textarea placeholder=" Enter Your Message" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button className={style.sendMessageBtn}>Send Message </button>
            </div>
          </form>
        </div>
        <div className={style.getInTouchRight}>
            <Image
            loading="lazy"
            src={contact}
            alt='contact'
           className={style.contactImg}
            />
            <div className={style.contactInfo}>
                <div className="flex items-center">
                <FaPhoneAlt className={style.contactIcon}/>
                   <div className="ml-2">
                   <p className="upercase text-2xl font-bold uppercase">Phone Number</p>
                        <strong>+88 01533389338</strong>
                   </div>
                </div>
                <div className={style.line}></div>
                <div className="flex items-center">
                <FaEnvelope className={style.contactIcon}/>
                   <div className="ml-2">
                   <p className="upercase text-2xl  font-bold uppercase">Email</p>
                        <strong>ghuronti@gmail.com</strong>
                   </div>
                </div>
            </div>
        </div>
      </section>
      <section className={style.socialMedia}>
        <div className={style.singleSocialMedia}>
           <div className={style.socialIcon}>
           <FaFacebookF/>
           </div>
            <h4 className="text-3xl font-bold my-2">33K</h4>
            <strong>Follower</strong>
        </div>
        <div className={style.singleSocialMedia}>
           <div className={style.socialIcon}>
           <FaUsers/>
           </div>
            <h4 className="text-3xl font-bold my-2">99K</h4>
            <strong>Members</strong>
        </div>
        <div className={style.activeSocial}>
           <div className={style.socialIcon}>
           <FaTwitter/>
           </div>
            <h4 className="text-3xl font-bold my-2">59K</h4>
            <strong>Followers</strong>
        </div>
        <div className={style.singleSocialMedia}>
           <div className={style.socialIcon}>
           <FaEnvelope/>
           </div>
            <h4 className="text-3xl font-bold my-2">150K</h4>
            <strong>Subscribes</strong>
        </div>
      </section>

      <section>
        <div className={style.subscribes}>
            <div className={style.subscribeContent}>
                <h2 className={style.subscribeHead}>Subscribe us our newsletter for <br /> newest booking updated </h2>
                <div className={style.subInput}>
                    <input type="email" placeholder="Enter Your Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </section>
       {/* map section */}
       <section className="container mx-auto flex flex-row justify-center items-center lg:my-5 sm:my-2 p-5">
        <Iframe
          className="lg:h-[600px] sm:h-48"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.702714087243!2d-118.24379858493394!3d34.05149622521712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648957fbb05%3A0x8c6c875a0069f4c9!2s26%20N%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1674159891667!5m2!1sen!2sbd"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          position="relative"
        ></Iframe>
      </section>
      </div>
      <Footer />
      
    </section>
  );
};

export default index;
