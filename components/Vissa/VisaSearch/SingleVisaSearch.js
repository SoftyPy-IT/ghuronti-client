import React from 'react';
import style from "./VisaSearch.module.css";

const SingleVisaSearch = ({handleShowDetail, visa}) => {
    // console.log(visa)
    return (
        <div>
             <div className={style.visaDetailsWrap}>
            <div className={style.detailHalf}>
              <span>Entry</span>
              <span>Duration</span>
              <span>Maximum Stay </span>
              <span>Processing Time</span>
              <span>Interview</span>
              <span>Cost</span>
              <span>View Details</span>
            </div>

            <div className={style.coastHalf}>
              <span>{visa.entry}</span>
              <span> {visa.duration}</span>
              <span> {visa.stay} </span>
              <span> {visa.processing_time} </span>
              <span>Embassies should catch the call </span>
              <span> {visa.service_charge} BDT </span>
              <span>
                <small
                  className={style.showDetailBtn}
                  onClick={handleShowDetail}
                >
                  Show
                </small>
              </span>
            </div>
          </div> 
        </div>
    );
};

export default SingleVisaSearch;