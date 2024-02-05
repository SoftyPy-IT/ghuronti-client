import React from "react";
import style from "./Passion.module.css";
import {
  FaUserGraduate,
  FaCheckCircle,
  FaBookReader,
  FaBookMedical ,
} from "react-icons/fa";
import doctor from "../../public/assets/doctor.png";
import man from "../../public/assets/man.png";
import people from "../../public/assets/people.png";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const Passion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <section className={style.conferenceTimeline}>
        <div className={style.conferenceCenterLine}></div>
        <div className={style.conferenceTimelineContent}>
          <div className={style.timelineArticle}>
            <div data-aos="fade-right" className={style.contentLeftContainer}>
              <div className={style.contentLeft}>
                <h2 className="text-xl"> For Student</h2>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">Student ID card Photo Copy</small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                    Birth Certificate (Only for Child & infant)
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                    Travel Letter or Leave letter from the Educational
                    Institute.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                    Travel Letter or Leave letter from the Educational
                    Institute.
                  </small>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className={style.contentRightContainer}>
              <div className={style.contentRight}>
              <div className={style.timeLineImg}>
                <Image
                  loading="lazy"
                  src={people}
                  alt="Picture of the author"
                 className={style.tImg}
                />
                </div>
              </div>
            </div>
            <div className={style.metaDate}>
              <FaUserGraduate className={style.studentIcon}></FaUserGraduate>
            </div>
          </div>
          <div className={style.timelineArticle}>
            <div data-aos="fade-up-right" className={style.contentLeftContainer}>
              <div className={style.contentLeft}>
                <div className={style.timeLineImg}>
                <div className={style.timeLineImg}>
                <Image
                  loading="lazy"
                  src={doctor}
                  alt="Picture of the author"
                 className={style.tImg}
                />
                </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up-left" className={style.contentRightContainer}>
              <div className={style.contentRight}>
                <h2 className="text-xl">
                  For Medical
                </h2>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  In case of medical treatment, a copy of the appointment letter
                  from a hospital in Thailand and if applicable, an original
                  letter from a local doctor/hospital if the applicant is a
                  first-time traveler.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  Recent case summary of the patient’s medical reports issued by
                  the local hospital.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  Booking confirmation letter (such as Med letter & Action Plan)
                  of an Air Ambulance.
                  </small>
                </div>
              </div>
            </div>
            <div className={style.metaDate}>
              <FaBookMedical  className={style.studentIcon}></FaBookMedical>
            </div>
          </div>
          <div className={style.timelineArticle}>
            <div data-aos="fade-down-right" className={style.contentLeftContainer}>
              <div className={style.contentLeft}>
                <h3 className="text-xl">
                  For Job Holder
                </h3>
                <div className="flex items-center mb-2">
                 <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  In the Case of Personal Account Statement (Savings Account) -
                  need to provide the Salary Certificate/Payslip last 03 months
                  </small>
                </div>
                <div className="flex items-center mb-2">
                 <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  Visiting card copy.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  For Govt. employees - GO is required with an English
                  translation notary must be required.
                  </small>
                </div>
              </div>
            </div>
            <div data-aos="fade-down-left" className={style.contentRightContainer}>
              <div className={style.contentRight}>
              <div className={style.timeLineImg}>
                <Image
                  loading="lazy"
                  src={man}
                  alt="Picture of the author"
                 className={style.tImg}
                />
                </div>
              </div>
            </div>
            <div className={style.metaDate}>
              <FaBookReader className={style.studentIcon}></FaBookReader>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Passion;
