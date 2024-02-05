import React from "react";
import B2BHajjUmrahLayout from "../../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from "../../../../../public/assets/umrah9.webp";
import style from "../umrah-visa-requirement/requirement.module.css";
import Image from "next/image";

const PerformUmrah = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <div className={style.visaRequirment}>
          <div className={style.visaRequirmentImg}>
            <Image loading="lazy" className={style.requireImg} alt="requirement" src={umrah} />
          </div>
          <div className="mt-5">
            <h3 className="text-3xl font-bold">কিভাবে উমরাহ পালন করবেন?</h3>
            <strong>উমরার ফরজ দুটি।</strong>
            <p>(এগুলো ইচ্ছায় বা অনিচ্ছায় ছুটে গেলে উমরা বাতিল হয়ে যাবে।)</p>
            <div>
              <strong>1. ইহরাম :</strong>
              <p>
                ইহরাম বাঁধা। ইহরাম পুরুষরা সেলাইবিহীন দুটি কাপড় পরিধান করবে। আর
                নারীরা ঢিলেঢালা স্বাভাবিক পোশাক পরিধান করবে।মিকাত থেকে বা
                মিকাতের বাইরে থেকে পবিত্রতা অর্জন করে উমরার নিয়তে ইহরামের কাপড়
                পরিধান করে তালবিয়া পাঠ করা; সম্ভব হলে দুই রাকাত নফল নামাজ আদায়
                করে নেওয়া।
              </p>
            </div>
            <div className="mt-3">
              <strong>তালবিয়া হলো</strong>
              <p>
                ’লাব্বাইকা আল্লাহুম্মা লাব্বাইক, লাব্বাইকা লা শারিকা লাকা
                লাব্বাইক, ইন্নাল হাম্দা ওয়াননি’মাতা লাকা ওয়াল মুলক, লা শারিকা
                লাকা’
              </p>
              <p className="mt-3 ">
                অর্থাৎ হে আল্লাহ! আমি তোমার দরবারে হাজির, আমি তোমার দ্বারে
                উপস্থিত, আমি হাজির, তোমার কোনো অংশীদার নেই, তোমার দরবারে
                উপস্থিত হয়েছি। নিশ্চয়ই সকল প্রশংসা ও নিয়ামতের সামগ্রী সবই
                তোমার, (সর্বযুগে ও সর্বত্র) তোমারই রাজত্ব, তোমার কোনো
                অংশীদার নেই।
              </p>
            </div>
            <div className="mt-3">
              <strong>
                ইহরামের নিয়ত করার কারণে কিছু কাজ নিষিদ্ধ হয়ে যায় সেগুলো হলোঃ
              </strong>
              <p>
                (১) সেলাই করে প্রস্তুতকৃত পোষাক পরা (পুরুষদের জন্য)। (২) মাথার
                সাথে লেগে থাকে এমন জিনিস দ্বারা মাথা ঢাকা। (৩) ইচ্ছাকৃত ভাবে
                মাথার চুল ও শরীরের পশম কাটা বা উঠান। (৪) হাত পায়ের নখ কাটা। (৫)
                আতর বা সুগন্ধি জাতীয় জিনিস ব্যবহার করা। (৬) স্থলচর প্রাণী শিকার
                করা। (৭) স্বামী-স্ত্রী মিলন করা বা এ জাতীয় বিষয়ে আলাপ আলোচনা
                করা। (৮) বিবাহের প্রস্তাব দেয়া বা বিবাহ বন্ধনে আবদ্ধ হওয়া। (৯)
                মহিলাদের জন্য হাত মোজা ব্যবহার, মুখ ঢাকা (তবে লোকজনের সামনে
                অবশ্যই মুখ ঢাকতে হবে)। (১০) মক্কা ও মদিনার হারাম সীমানার গাছ
                গাছালী কাটা, ভাঙ্গা, উপড়ান (সর্বাস্থায়)। (১১) মক্কা ও মদিনার
                হারাম সীমানায় পরে থাকা জিনিস নেয়া (তবে তা মালিককে দেয়ার জন্য
                উঠান যাবে)।
              </p>
            </div>
            <div className="mt-5">
              <strong>2. তাওয়াফ: </strong>
              <p>
                বাইতুল্লাহ তাওয়াফ করা। মক্কায় পৌঁছে কালবিলম্ব না করে পবিত্রতা
                অর্জন করে তাওয়াফ করতে হবে। পুরুষরা তাওয়াফের সময় ইজতেবা তথা ডান
                কাঁধ খালি করে রাখবে। অর্থাৎ চাদরের মধ্যভাগ ডান কাঁধের নিচ দিয়ে
                নিয়ে বাম কাঁধের ওপর রাখতে হবে। হাজরে আসওয়াদ বরাবর জায়গা থেকে
                ‘বিসমিল্লাহি আল্লাহু আকবার’ বলে তাওয়াফ শুরু করতে হবে। তাওয়াফের
                সময় সম্ভব হলে রুকনে ইয়ামানী হাত দ্বারা স্পর্শ করবে এবং প্রতিবার
                চক্করে হাজরে আসওয়াদ পর্যন্ত পৌঁছলে হাজরে আসওয়াদের দিকে হাত
                দ্বারা ইশারা করে ‘বিসমিল্লাহি আল্লাহু আকবার’ বলে পরবর্তী
                প্রদক্ষিণ শুরু করবে। তাওয়াফ অবস্থায় কোরআন তেলাওয়াতসহ যেকোনো দোয়া
                পাঠ করা যায়। এভাবে সাত চক্কর শেষ হলে উভয় কাঁধ ঢেকে নেবে এবং
                মাকামে ইবরাহীমের বরাবর পিছনে দুই রাকাত নামাজ পড়বে। তবে কখনও
                ভিড়ের কারণে সেখানে নামাজ পড়া সম্ভব না হলে মাসজিদুল হারামের
                যেকোনো স্থানে পড়লে আদায় হয়ে যাবে।
              </p>
            </div>
            <div className="mt-3">
              <strong>উমরার ওয়াজিবও দুটি।</strong>
              <p>
                (এগুলো ইচ্ছাকৃত ছেড়ে দিলে উমরা বাতিল হবে। আর অনিচ্ছাকৃত ছুটে
                গেলে উমরা আদায় হয়ে যাবে; তবে শর্ত হলো এর ক্ষতিপূরণ হিসেবে দম বা
                কোরবানি দিতে হবে।)
              </p>
            </div>
            <div className="mt-3">
              <strong>1. সাঈ : </strong>
              <p>
                সাফা-মারওয়া সাঈ করা। সফা পাহাড় থেকে সাঈ শুরু করতে হবে। প্রথমে
                সফা পাহাড়ে আরোহণ করে কোরআনের এই আয়াতটি পাঠ করবে, ‘ইন্নাস সাফা
                ওয়াল মারওয়াতা মিন শায়া ইরিল্লাহ।’ (সুরা বাকারা : আয়াত ১৫৮)।
                অতঃপর কিবলামুখি হয়ে দুই হাত তুলে মহান স্রষ্টার দরবারে প্রার্থনা
                করবে; কেননা এটা দোয়া কবুলের বিশেষ স্থান। এরপর ‘বিসমিল্লাহি
                আল্লাহু আকবার লাইলাহা ইল্লাল্লাহু ওয়াহদাহু লা-শারীকালাহু লাহুল
                মুলকু ওয়ালাহুল হামদু ওয়াহুওয়া আলা-কুল্লি শাইয়িন কাদির’ বলে সাঈ
                শুরু করবে। সাঈ অবস্থায় যেকোনো দোয়া পাঠ করা যায়; তবে সবুজ বাতি
                জ্বালানো স্থানটি পুরুষরা একটু দ্রুত অতিক্রম করতে হবে (মহিলারা
                স্বাভাবিকভাবে অতিক্রম করবে) এবং স্থানটি অতিক্রমকালে উভয়ে এই দোয়া
                পড়বেÑ রাব্বিগফির ওয়ারহাম ওয়াআনতাল আ’আজ্জুল আকরাম। অতঃপর মারওয়া
                পাহাড়ে পৌঁছে সাফা পাহাড়ের অনুরূপ দোয়া ও তাসবিহ পাঠ করবে। এভাবে
                মোট সাতবার প্রদক্ষিণ করবে এবং মারওয়া পাহাড়ে এসে সাঈ শেষ হবে।
              </p>
            </div>
            <div className="mt-3">
              <strong>2.মাথা মুণ্ডানো:</strong>
              <p>
                পুরুষদের মাথা মুণ্ডানো বা চুল ছাঁটতে হবে। আর মহিলাদের চুলের
                অগ্রভাগ থেকে কমপক্ষে এক কুর পরিমাণ কাটতে হবে। আর এরই মাধ্যমে
                উমরার কার্যক্রম সম্পন্ন হবে। প্রত্যেক খোদাপ্রেমিক মুমিন বান্দাই
                মক্কা ও মদিনা জিয়ারতের স্বপ্ন লালন করে। সর্বদা তৃষ্ণার্ত থাকে
                জিয়ারতের পিপাসায়। প্রকৃত প্রেমিক বান্দা কখনও বাইতুল্লাহ ও মদিনার
                জিয়ারতে তৃপ্ত হয় না। বরং প্রতিবার জিয়ারতে পিপাসা আরও প্রবলভাবে
                বৃদ্ধি পায় এবং ফিরে এসে প্রতিটি মুহূর্তে সে দগ্ধ হতে থাকে মক্কা
                ও মদিনার বিরহ বেদনায়।
              </p>
            </div>
            <strong className="mt-3 block">
            তাই মহান প্রভুর দরবারে আমাদের এই মিনতি, হে আল্লাহ! আপনার সব প্রেমিক বান্দাদের দয়ার চাদরে আবৃত করে হজ ও উমরার মাধ্যমে বারবারবাইতুল্লাহ ও মদিনার জিয়ারতের তাওফিক দান করুন।
            </strong>
          </div>
        </div>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default PerformUmrah;