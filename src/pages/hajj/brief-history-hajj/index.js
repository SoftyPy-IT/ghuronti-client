import React from "react";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import umrah from "../../../../public/assets/hajj10.jpg";
import style from "../../b2bdashboard/hajj/hajj.module.css";
import Image from "next/image";
const BriefHistoryHajj = () => {
  return (
    <HajjLayout>
      <div className={style.visaRequirment}>
          <div className={style.visaRequirmentImg}>
            <Image loading="lazy" className={style.requireImg} alt="requirement" src={umrah} />
          </div>
          <div className="mt-5">
            <h2 className="text-3xl font-bold">
              A Brief History of Holy Hajj - Islamic Overview
            </h2>
            <p className="my-3">
              Prophet Ibrahim would come to Makkah to complete Hajj every year
              after making the Ka’bah. After his passing away, this practice was
              continued by his son. Still, slowly but surely with the passage of
              time, both the form and the goal of the Hajj rites were altered.
              As idolization spread throughout Arabia, the Ka’bah lost its
              cleanliness, and idols were placed inside it. Its walls were
              covered with poems and paintings, including one of Jesus and his
              mother Maryam, and eventually, over 360 statues came to be located
              around the Ka’bah.
            </p>
            <p>
              {" "}
              At the time of hajj, the atmosphere around the holy boundaries of
              the Ka’bah was like a festival. Men and women would set out round
              the Ka’bah nakedly. Their request became devoid of all sincere
              celebration of Allah and was instead summary to a series of hand
              clapping, whistling, and the blowing of horns. In the name of God,
              sacrifices were also made However, the blood of the sacrificed
              animals was transferred onto the walls of the Ka’bah and the flesh
              was dropped from pillars around the Ka’bah, in the faith that
              Allah required the flesh and blood of these animals.
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-3xl font-bold">
              The Major Parts of the Holy Hajj Journey
            </h2>
            <p>
              The major parts of the whole Hajj event were singing, drinking,
              disloyalty and other acts of sin were rife amongst the pilgrims
              and the poetry competitions which were held during the Hajj event.
              In these competitions, poets would praise the bravery and splendor
              of their own tribesmen and tell exaggerated tales of the cowardice
              and miserliness of other tribes.
            </p>
            <p className="my-3">
              Competitions in generosity were also staged where the chief of
              each tribe would set up huge cauldrons and feed the pilgrims, only
              so that they could become well-known for their extreme generosity.
            </p>
            <p>
              As a result, the people had totally neglected the teachings of
              their forefather and leader Prophet Ibrahim (A). The home that he
              had ready pure for the worship of Allah alone, had been totally
              dishonored by the pagans and the rites which he had established
              were completely indistinct by them. This sad state of affairs
              continued for almost two and a half thousand years. After this
              long time, the time came for the prayer of Prophet Ibrahim to be
              answered: Our Lord! S
            </p>
            <p className="my-3"> Our Lord! Send amongst them a Messenger of their own, who shall recite unto them your aayaat (verses) and instruct them in the book and the Wisdom and sanctify them. Verily you are the Azeezul-Hakeem the All-Mighty, the All-Wise.
(Surah Al-Baqarah, Verses no 129)</p>
          </div>
        </div>
    </HajjLayout>
  );
};

export default BriefHistoryHajj;





