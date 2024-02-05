import React from 'react';

import style from './savecard.module.css'
import Image from 'next/image';
import card from "../../../../public/assets/saveCard.png";
import B2CDashboardLayout from '../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout';
const SaveCard = () => {
    return (
        <B2CDashboardLayout>
             <div className={style.saveCard}>
              <div>
                <Image
                loading="lazy"
                  src={card}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                <h4 className="text-3xl font-bold mt-5">Saved Cards</h4> <br />
                <h4 className="text-3xl font-bold ">No Saved Cards Found</h4>
              </div>
            </div>
        </B2CDashboardLayout>
    );
};

export default SaveCard;