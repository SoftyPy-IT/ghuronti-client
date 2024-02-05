import React from "react";
import style from "./AboutHero.module.css";
import Image from "next/image";
import about from "../../public/assets/about.png";

const AboutHero = () => {
  return (
    <section className={style.aboutWrap}>
      <section className={style.aboutHero}>
        <Image
         loading="lazy"
          src={about}
          alt="Picture of the author"
          className={style.aboutHeroImg}
        />
        <h2 className={style.aboutHead}>
          Ghuronti.com is partnering with you to reach your dream destinations.
        </h2>
      </section>
      <section className="py-28">
        <div className="flex justify-center flex-wrap-reverse items-center">
          <div className={style.leftBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={253}
            height={330}
            fill="none"

          >
            <path
              fill="#000"
              d="m227.448 224.718-49.914-32.444 18.818-34.499a54.995 54.995 0 0 0 6.696-26.257V76.904A76.765 76.765 0 0 0 126.281.137a76.767 76.767 0 0 0-76.767 76.767v54.614a54.995 54.995 0 0 0 6.695 26.257l18.818 34.499-49.914 32.444A54.643 54.643 0 0 0 .164 270.693v58.444h252.233v-58.444a54.634 54.634 0 0 0-24.949-45.975Zm3.016 82.486H22.097v-36.511a32.786 32.786 0 0 1 14.97-27.585l66.938-43.51-28.54-52.325a33.002 33.002 0 0 1-4.017-15.755V76.904a54.834 54.834 0 0 1 109.666 0v54.614a33 33 0 0 1-4.017 15.755l-28.54 52.325 66.939 43.51a32.785 32.785 0 0 1 14.968 27.585v36.511Z"
            />
          </svg>
          </div>
          <div className={style.rightBox}>
            <div>
              <h2 className="text-4xl bold">Kaji Ehsan</h2>
              <p className="text-xl">Directior</p>
              <hr className="mb-5 mt-2 border-black" />
              <h2 className="text-xl font-bold">We are </h2>
              <p>
                Ghuronti.com is leading online travel aggregator in Bangladesh.
                Our mission is Providing advanced travel solutions with great
                care and satisfaction. And that is what we have done since our
                inception. Ghuronti.com is a pioneer in Bangladesh’s online
                travel space. Ghuronti.com is Founded by Kazi Sihan Hossain in
                the year 2016. Ghuronti.com began its journey by serving the
                Bangladesh travel market with best-value products, services and
                round-the-clock customer support. Through Ghuronti.com you can
                book your flights, hotels, and holiday packages in just a few
                clicks at low cost. It will save your time and money both. Over
                the years, we have partnered with many leading brands from the
                aviation &amp; hospitality industries, creating fruitful partner
                relations for business expansion opportunities. We also entered
                the ground transport space and commenced offering car and bus
                booking services.
              </p>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default AboutHero;
