import React from 'react';
import B2BdashboardLayout from '../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout';
import MoveText from '../../../../components/UserDashBoard/MoveText/MoveText';
import UmraHeroBox from '../../../../components/UserDashBoard/UmraHeroBox/UmraHeroBox';
import UmraPackage from '../../../../components/Umra/UmraPackage';

const index = () => {
    return (
        <B2BdashboardLayout>
            <MoveText/>
            <UmraHeroBox/>
            <UmraPackage/>
        </B2BdashboardLayout>
    );
};

export default index;