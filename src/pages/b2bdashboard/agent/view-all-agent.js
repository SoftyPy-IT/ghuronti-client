import React from "react";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import style from "../manage/manage.module.css";
import styles from '../b2bagent/agent.module.css'
import Link from "next/link";
const ViewAllAgent = () => {
    const users = [
        {
            id: '01',
            name: "Rakib",
            role: 'admin',
            email: 'admin@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'active'
            
        },
        {
            id: '02',
            name: "Hanif",
            role: 'manager',
            email: 'manager@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'inactive'
            
        },
        {
            id: '03',
            name: "Karim",
            role: 'Team Leader',
            email: 'karim@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'active'
            
        },
        {
            id: '04',
            name: "Habib",
            role: 'admin',
            email: 'habib@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'inactive'
            
        },

    ]
  return (
    <B2BdashboardLayout>
      <div className="w-full h-[50px] bg-[#19ABE3] text-white flex items-center justify-center ">
        <h2 className="text-center text-2xl font-bold">List of all Agent </h2>
      </div>
      <table className="table  lg:table-auto columns-xl break-after-column mt-8 mb-24 ">
        <thead className={style.tableWrap}>
          <tr className={styles.alluserList}>
            <th>SL No </th>
            <th> Name </th>
            <th>Role</th>
            <th>Email </th>
            <th>Username </th>
            <th>Mobile</th>
            <th>Status </th>
            <th colSpan={2}>Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user=><tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td> {user.email} </td>
                <td>{user.username}</td>
                <td>{user.mobile}</td>
                <td>
                  <span className="bg-[#4AB449] text-white font-xs text-xs p-2 rounded">
                    {user.status}
                  </span>
                </td>
                <td>
                 <Link href='/b2bdashboard/agent/edit'>
                 <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                    Edit
                  </span>
                 </Link>
                </td>
                <td>
                  <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                    Change Password
                  </span>
                </td>
              </tr>)
          }
          
        </tbody>
      </table>
    </B2BdashboardLayout>
  );
};

export default ViewAllAgent;
