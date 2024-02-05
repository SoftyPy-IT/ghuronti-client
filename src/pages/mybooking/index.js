import React from 'react'
import AdminLeftSide from '../../../components/DashBoard/AdminLeftSide'
import AdminRightSide from '../../../components/DashBoard/AdminRightSide'

const index = () => {
     return (
          <section>
            <div className='grid grid-cols-12'>
                <div>
                    <AdminLeftSide></AdminLeftSide>
                </div>
                <div className='col-span-9'>
                   <AdminRightSide></AdminRightSide>
                </div>
            </div>
          </section>
        )
}

export default index
