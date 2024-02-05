import React from 'react';
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import umrah from "../../../public/assets/hajj3.jpg";
import hajj2 from "../../../public/assets/hajj2.png";
import hajj3 from "../../../public/assets/hajj4.png";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import style from './HajjUmrah.module.css'
import Image from 'next/image';
const HajjUmrahLeftSide = () => {
    return (
        <div>
            <div className={style.packageLeftSide}>
          <div className={style.LeftSideWrap}>
            <div className={style.packages}>
            </div>
            <div >
            <Accordion className={style.hajjAccordion}>
                <AccordionSummary
                className={style.hajjSummary}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={style.hajjTypograpy}>
                  <p className="text-[16px] font-bold">Hajj Management</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={style.hajjTypograpy}>
                  <Accordion className={style.hajjAccordion}>
                <AccordionSummary
                className={style.hajjSummary}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={style.hajjTypograpy}>
                  <p className="font-bold ">Hajj Package </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="hajjUmra/hajj/economy"><p>Economy Hajj Packages </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href=" "><p>Non Shifting Hajj Packages </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href=" "><p>Shifting Hajj Packages </p> </Link>
                  </Typography>
                </AccordionDetails>
                
              </Accordion>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href=" "><p>Hajj Visa Requirement</p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href=" "><p>Brief History of Hajj </p> </Link>
                  </Typography>
                </AccordionDetails>
                
              </Accordion>
              <div className="bg-[#19ABE3] text-white w-full py-2 pl-3  mt-3 mb-10 text-[14px]">
              <Link href='/hajjUmra/umrahPackage'><p>Umrah Offer  </p> </Link>
              </div>
            </div>

            <div className="leftSideOffer">
              <div className={style.umrahOffer}>
                <Image loading="lazy" alt="hajj3" src={hajj3} className={style.umraImage} />
              </div>
              <h2 className="text-xl font-bold text-center mt-2">Hajj Offer</h2>
            </div>
            <div className="leftSideOffer">
              <div className={style.umrahOffer}>
                <Image loading="lazy" alt="umrah" src={hajj2} className={style.umraImage} />
              </div>
              <h2 className="text-xl font-bold text-center mt-2">
                Umrah Offer
              </h2>
            </div>
          </div>
        </div>
        </div>
    );
};

export default HajjUmrahLeftSide;