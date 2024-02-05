import React from "react";
import style from "./ToursSearch.module.css";
import Image from "next/image";
import tours from "../../../public/assets/tour.jpeg";
import tours2 from "../../../public/assets/destination4.jpeg";
import tours3 from "../../../public/assets/destination10.jpeg";
import { StarOutline, Block, KeyboardBackspace } from "@mui/icons-material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const ToursSearch = () => {
  const toursDetailsData = useSelector((state) => state.tours.toursDetailsData);
  console.log(toursDetailsData.getPackage);
  const [toursDataWithFilter, setToursDataWithFilter] = useState(
    toursDetailsData?.getPackage
  );
  console.log(toursDataWithFilter)
  const [reload, setReload] = useState(false);
  const handleFilterMethod = (e) => {
    if (e === "Traveler Favorite") {
      localStorage.removeItem("t_f");
      setReload(!reload);
    } else {
      localStorage.setItem("t_f", e);
      setReload(!reload);
    }
  };
  console.log(toursDataWithFilter)
  const { category_type, } = toursDataWithFilter

  const getMethod = localStorage.getItem("t_f");
  useEffect(() => {
    if (getMethod && getMethod === "Price (Low to high)") {
      const lowestPriceData = toursDataWithFilter
        .filter((item) => typeof item.price_low_to_hight === "number") // Exclude non-numeric prices
        .sort((a, b) => a.price_low_to_hight - b.price_low_to_hight);
      setToursDataWithFilter(lowestPriceData);
    } else if (getMethod && getMethod === "Price (High to low)") {
      const lowestPriceData = toursDataWithFilter
        .filter((item) => typeof item.price_hight_to_low === "number") // Exclude non-numeric prices
        .sort((a, b) => b.price_hight_to_low - a.price_hight_to_low);
      setToursDataWithFilter(lowestPriceData);
    } else {
      setToursDataWithFilter(toursDetailsData?.getPackage);
    }
  }, [getMethod, reload, toursDataWithFilter, toursDetailsData?.getPackage]);



  return (
    <div>
      <div className={style.toursDetialsWrap}>
        <h3 className="font-bold text-3xl">Tours In Cox s Bazar </h3>
        <div className="flex justify-between w-full my-3 ">
          <div className={style.topBarCard}>
            <label>Select Your Date </label>
            <input type="date" />
          </div>
          <div className={style.topBarCard}>
            <select onChange={(e) => handleFilterMethod(e.target.value)}>
              <option value="Traveler Favorite" selected>
                {" "}
                Traveler Favorite
              </option>
              <option value="Price (Low to high)"> Price (Low to high) </option>
              <option value="Price (High to low)"> Price (High to low)</option>
              <option value="Duration "> Duration </option>
            </select>
          </div>
        </div>
        <div className={style.toursDetails}>
          <div className={style.toursDetailLeftSide}>
            <strong className="mt-3">
              {" "}
              <span>
                {" "}
                <KeyboardBackspace className={style.star} />{" "}
              </span>
              All things to do{" "}
            </strong>
            <div className={style.category}>
              <strong>Categorys Type </strong>
              <p>Attractions </p>
              <p>Tours </p>
              <p>Day Trips </p>
              <p>OUtdoor Activities</p>
              <p>Shopping </p>
              <p>Transportation </p>
              <p>Traveler Resources </p>
            </div>
            <div className={style.category}>
              <strong>Products Category </strong>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">Sightseeing Tours </p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">private Tours </p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">Bus Tours </p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-2">Historical & Heritage Tours </p>
              </div>
            </div>
          </div>
          <div className={style.toursDetailsRightSide}>
            <div className={style.toursCardWrap}>
              <h6 className="text-xl font-bold mb-3">
                120 places sorted by traveler favorites
              </h6>
              
            {
              toursDataWithFilter.map(data=>(
                <div key={data._id} className={style.toursCard}>
                <div className={style.toursCardLeft}>
                  <Image
                    loading="lazy"
                    alt="tours"
                    src={data?.image[0]}
                    width={500}
                    height={100}
                    className={style.toursImg}
                  />
                </div>
                <div className={style.toursCardRight}>
                  <h6 className="text-xl">
                   {data.title}
                  </h6>
                  <div className={style.cardTextWrap}>
                    <div className={style.cardText}>
                      <div className="flex mt-2">
                        <StarOutline className={style.star} />
                        <StarOutline className={style.star} />
                        <StarOutline className={style.star} />
                        <StarOutline className={style.star} />
                        <StarOutline className={style.star} />
                      </div>
                      <p>Private and Luxury</p>
                      <p>6–8 hours</p>
                      <p>
                        {data.sub_title}
                      </p>
                      <p>
                        Free cancellation{" "}
                        <span>
                          {" "}
                          <Block className={style.star} />{" "}
                        </span>
                      </p>
                      <p>Recommended by 100% of travelers</p>
                    </div>
                    <div className={style.cardPrice}>
                      <b>৳{data.price}</b>
                      <p>Per adults</p>
                      <Link href={`/tours/book?id=${data._id}`}>
                        <button>Reserve</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSearch;
