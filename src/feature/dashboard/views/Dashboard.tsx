import React from 'react';
import CardDataStats from '../../../feature/_global/CardDataStats';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { GrTransaction } from 'react-icons/gr';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <CardDataStats title="Total produk" total="20">
        <MdOutlineProductionQuantityLimits
          size={24}
          className="text-blue-500 dark:text-white"
        />
      </CardDataStats>
      <CardDataStats title="Total Pengguna" total="240">
        <FaUsers size={24} className="text-blue-500 dark:text-white" />
      </CardDataStats>
      <CardDataStats title="Total Transaksi" total="2.450">
        <GrTransaction size={24} className="text-blue-500 dark:text-white" />
      </CardDataStats>
    </div>
  );
};

export default Dashboard;
