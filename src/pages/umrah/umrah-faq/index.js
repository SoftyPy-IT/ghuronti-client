import React from "react";
import style from "../../b2bdashboard/umrah/umrah-visa-requirement/requirement.module.css";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const UmrahFAQ = () => {
  return (
    <HajjLayout>
      <div className={style.visaRequirment}>
        <div className="mt-5">
          <h3 className="text-4xl font-bold mb-2">
            বাংলাদেশ থেকে প্রচলিত উমরাহ, ভিসা, প্যাকেজ, প্রাইস ও এজেন্সি
            সম্পর্কিত প্রায় সকল প্রশ্ন - জিজ্ঞাসা ও তার উত্তরসমূহ
          </h3>
          <p>
            এটা স্বীকার করেত দ্বিধা নেই যে, বাংলাদেশ থেকে সৌদি আরবের পবিত্র
            মক্কা ও মদিনায় জিয়ারত উদ্যেশ্যে ওমরা ভিসা, বিমান টিকেট, হোটেল বুকিং
            সহ নানা সেবা নিয়ে স্বদেশীয় ভাই বোনেদের নানাপ্রকার প্রশ্ন জিজ্ঞাসা
            রয়েছে। এসকল প্রশ্নের উত্তর সাধারনত এজেন্সি কিংবা পরিচিত শ্রদ্ধাভাজন
            আলেম ওলামাদের থেকে কমবেশী পাওয়া যায়। আমাদের সম্মানিত ওমরা হাজী ও সকল
            ক্লাইন্টদের জ্ঞাতার্থে নিম্নে আমরা ওমরা সংশ্লিষথ্ট কমন কিছু প্রশ্ন
            উত্তর দেয়ায় সচেষ্ট থাকবো।
          </p>
        </div>
        <div className="my-5">
          <h3 className="text-2xl font-bold">
            ওমরা প্যাকেজ সংক্রান্ত কিছু কমন প্রশ্ন এবং তাদের উত্তর নিম্নে দেওয়া
            হলো:
          </h3>

          <div className="mt-8">
            <Accordion className={style.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.accordionIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={style.accordionSummary}
              >
                <Typography className={style.accordionTypo}>
                  <strong> 1. ওমরা প্যাকেজ কী?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.answerTypo}>
                  ওমরা প্যাকেজ হলো বাংলাদেশ থেকে কোন নাগরিক পবিত্র মক্কা ও মদিনা
                  শহরে উমরার জন্য ভ্রমনে ইচ্ছুক হাজীদের জন্য সৌদি আরবের ওমরা
                  ভিসা প্রসেসিং, আসা যাওয়া বিমান ভাড়া, হোটেল আবাসন ও যাতায়াত সহ
                  নানাধরনের সুযোগ সুবিধা সংশ্লিষ্ট একটা সমন্বিত উদ্যোগ। যা
                  নির্দিষ্ট সময়ের জন্য একজন বাংলাদেশি নাগরিকের মক্কা মদিনা
                  যাত্রা সহজতরো করে।।
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.accordionIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={style.accordionSummary}
              >
                <Typography className={style.accordionTypo}>
                  <strong>2. ওমরা প্যাকেজ কেন প্রয়োজন?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.answerTypo}>
                  <p>
                    সৌদি সরকারের নতুন নিয়ম অনুসারে যদিও উমরা হজ্জের জন্য বিশেষ
                    বিধিনিষেধ নেই, তথাপিও পবিত্র মক্কা মদিনা শহরে আপনার আবাসন,
                    ভিসা প্রসেসিং, হোটেল বুকিং, জিয়ারত ও সংশ্লিস্ট যেকোন
                    ট্রান্সপোর্টেশন, খাবার দাবার সহ সকল আয়োজন সহজ, উপভোগ্য ও
                    হেসেল-ফ্রি করতে নির্ভরযোগ্য কোন এজেন্সির মাধ্যমে ওমরা
                    প্যাকেজ সিলেক্ট করা খুবই সাশ্রয়ী ও চমৎকার আইডিয়া।
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={style.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.accordionIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={style.accordionSummary}
              >
                <Typography className={style.accordionTypo}>
                  <strong>3. ওমরা প্যাকেজের আবেদন প্রক্রিয়া কি?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.answerTypo}>
                  <p>
                    ওমরা প্যাকেজের আবেদন প্রক্রিয়া অনলাইন বা নির্দিষ্ট এজেন্সির
                    মাধ্যমে সাবমিট করতে হয়। আবেদনকারী সঠিক সাপ্তাহিক/মাসিক ইনকাম
                    প্রত্যাহার করে ওমরা প্যাকেজ প্রাপ্ত করতে পারে।
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.accordionIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={style.accordionSummary}
              >
                <Typography className={style.accordionTypo}>
                  <strong>4. ওমরা প্যাকেজের জন্য কে-কে আবেদন করতে পারে?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.answerTypo}>
                  <p>
                    ওমরা প্যাকেজের জন্য আবেদন করতে হলে আপনার ইনকামের বিভিন্ন
                    স্তরের সংম্পর্কে নির্দিষ্ট শর্তাবলী মেনে চলতে হবে। সময়ের
                    জন্যে আবেদনের যে কে-কে সময় নির্ধারণ করে তা সরকারের নীতির
                    অধীনে পরিপর্তন হতে পারে।
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={style.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.accordionIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={style.accordionSummary}
              >
                <Typography className={style.accordionTypo}>
                  <strong>5. ওমরা ভিসার সময়কাল কতদিন?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.answerTypo}>
                  <p>
                    সাধারনত ওমরা ভিসার মেয়াদকাল ৩০ দিন। তবে আপনাকে ওমরা ভিসা
                    নিয়ে সৌদি আরবে প্রবেশের ২ সপ্তাহের মধ্যে অবশ্যই ওমরা করতে
                    হবে।
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={style.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.accordionIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={style.accordionSummary}
              >
                <Typography className={style.accordionTypo}>
                  <strong>6. ওমরা ভিসা প্রসেসিং টাইম কতদিন?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.answerTypo}>
                  <p>
                    ডকুমেন্টস সহ সমস্ত নীয়ম যথাযথভাবে পালন করে এপ্লিকেশন করলে
                    ওমরা ভিসা প্রসেসিংয়ে খুব বেশী সময় লাগেনা। এটা ৩ থেকে ৫
                    কর্মদিবসেই সম্পন্ন হতে পারে।
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </HajjLayout>
  );
};

export default UmrahFAQ;
