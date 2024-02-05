import React from "react";
import style from "./Cancel.module.css";
import Link from "next/link";
import cancel from "../../../public/assets/cancelflight.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";

const Cancel = () => {
  return (
    <section className={style.cancelWrap}>
      <div className={style.cancelImg}>
        <Image  loading="lazy" src={cancel} alt="cancel" width={250} height={250}></Image>
      </div>
      <strong className="text-2xl text-[#4AB449]">Cancel My Booking</strong>
      <p className="my-5">
        To cancel your booking, please click on the Cancel My Booking button.
        This action will cancel your reservation. Thank you for choosing our
        services, and we hope to assist you with your future bookings.
      </p>
      <p>
        Please read the{" "}
        <strong className="text[#4AB449]">
          <Link href="/profile/userbooking/policy"> Cancellation Policy </Link>
        </strong>{" "}
        carefully and confirm your request.
      </p>
      <div className={style.cancelPolicy}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I have read the cancellation policy."
          />
        </FormGroup>
      </div>
      <div>
        <small>Please check the box to confirm your request.</small>
      </div>
      <div className={style.cancelBtn}>
        <button>CANCEL MY BOOKING</button>
      </div>
    </section>
  );
};

export default Cancel;
