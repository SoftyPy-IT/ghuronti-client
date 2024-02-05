import React from "react";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import umrah from "../../../../public/assets/hajj8.png";
import style from "../../b2bdashboard/hajj/hajj.module.css";
import Image from "next/image";
const PreRegistration = () => {
  return (
    <HajjLayout>
      <div className={style.visaRequirment}>
          <div className={style.visaRequirmentImg}>
            <Image loading="lazy" className={style.requireImg} alt="requirement" src={umrah} />
          </div>
          <div className="mt-5">
            <strong className="text-2xl">হজ - প্রাক-নিবন্ধন সিস্টেম</strong>
            <p className="my-3">
              সৌদি ‘ই হজ সিস্টেমের’ সঙ্গে সমন্বয়ের জন্য হজযাত্রীদের জন্য
              প্রাক্-নিবন্ধন পদ্ধতি চালু হয়েছে। ধর্ম বিষয়ক মন্ত্রণালয়ের পক্ষে
              বিজনেস অটোমেশন লিঃ প্রাক্-নিবন্ধন কার্যক্রমে তথ্য-প্রযুক্তির
              সহায়তা করছে। সিস্টেমের কোন কারিগরি পরিবর্তন/পরিবর্ধন করা হলে তা
              হজের ওয়েবসাইটে নোটিস দিয়ে জানানো হবে।.
            </p>
            <p className="mb-3">
              হজ এজেন্সিগণ তাদের লাইসেন্সের জন্য যে ইমেইল হজ অফিসে জমা দিয়েছেন,
              সেই ইমেইল ব্যবহার করেই প্রাক-নিবন্ধন সিস্টেমে সাইন আপ করতে হবে এবং
              এক ইমেইল ব্যবহার করে একাধিক লাইসেন্সের কাজ করা যাবে না।
            </p>
            <p>
              প্রশিক্ষণ সার্ভারের ইউজার ও ডাটাবেজের সাথে মূল সার্ভারের ইউজার ও
              ডাটাবেজের সম্পর্ক নেই বিধায়, মূল সার্ভারের জন্য আলাদা ভাবে ইউজার
              নিতে হবে। প্রাক্-নিবন্ধন ব্যবস্থার সফলতার জন্য আপনাদের সকলের
              পরামর্শ ও সহযোগিতা আবশ্যক।.
            </p>
          </div>
        </div>
    </HajjLayout>
  );
};

export default PreRegistration;





