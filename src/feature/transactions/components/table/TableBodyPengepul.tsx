import { useState } from 'react';
import { dummmyDataTransactionPengepul, ServiceDrawerAdmin } from '../../store';
import { ServiceDialog } from '../../../_global/store';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import MenuTable from '../../../_global/components/MenuEllipsTable/MenuTable';

const TableBodyPengepul = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [, setDrawer] = useAtom(ServiceDrawerAdmin);
  const [, setDialog] = useAtom(ServiceDialog);
  const navigate = useNavigate();

  return (
    <tbody>
      {dummmyDataTransactionPengepul.map((value, idx) => (
        <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
          <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
            <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
              {value.name}
            </p>
          </td>
          <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
            <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
              {value.email}
            </p>
          </td>
          <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
            <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
              {value.JenisSampah}
            </p>
          </td>
          <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
            <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
              {value.Berat} ons
            </p>
          </td>
          <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
            <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
              {value.Total}
            </p>
          </td>
          <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark w-10 max-w-15">
            <p
              className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                value.Status
                  ? 'bg-success text-success'
                  : 'bg-danger text-danger'
              }`}
            >
              {value.Status ? 'Paid' : 'Unpaid'}
            </p>
          </td>
          <td className="border-b border-[#eee] py-4 pr-4 dark:border-strokedark text-right">
            <MenuTable
              id={idx}
              onClickDelete={() => {
                setDialog({
                  show: true,
                  id: value.id,
                });
              }}
              onClickDetail={() => navigate(`/transaksi/${value.id}`)}
              onClickUpdate={() => {
                setDrawer({
                  type: 'UPDATE',
                  show: true,
                  data: {
                    id: value.id,
                    Berat: value.Berat,
                    JenisSampah: value.JenisSampah,
                    name: value.name,
                    email: value.email,
                    Status: value.Status,
                    Total: value.Total,
                    role: value.role,
                  },
                });
              }}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyPengepul;
