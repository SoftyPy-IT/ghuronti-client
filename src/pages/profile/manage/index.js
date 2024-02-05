import React from 'react';
import style from '../savecard/savecard.module.css'
import card from "../../../../public/assets/deleteAccount.png";
import Image from 'next/image';
import B2CDashboardLayout from '../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout';
const Manage = () => {
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

                <h4 className="text-2xl mt-5 font-bold ">
                  You can delete your Ghuronti Account at any time. If <br />
                  you change your mind, you might not be able to <br /> recover
                  it.
                </h4>
                <div>
                  <button className={style.deleteBtn}>Delete Account</button>
                </div>
              </div>
            </div>
        </B2CDashboardLayout>
    );
};

export default Manage;