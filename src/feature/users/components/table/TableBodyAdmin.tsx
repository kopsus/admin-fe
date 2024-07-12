import { useState } from 'react';
import { dummyDataAdmin, ServiceDrawerAdmin } from '../../store';
import { ServiceDialog } from '../../../_global/store';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import MenuTable from '../../../_global/components/MenuEllipsTable/MenuTable';
import DialogDelete from '../../../_global/components/Modal/DialogDelete';

const TableBodyAdmin = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [, setDrawer] = useAtom(ServiceDrawerAdmin);
  const [dialog, setDialog] = useAtom(ServiceDialog);
  const navigate = useNavigate();

  return (
    <>
      <tbody>
        {dummyDataAdmin
          .filter((value) => value.role === 'Admin')
          .map((value, idx) => (
            <tr
              key={idx}
              className="hover:bg-slate-100 dark:hover:bg-slate-800"
            >
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
              <td className="border-b border-[#eee] py-4 pr-4 dark:border-strokedark text-right">
                <MenuTable
                  id={idx}
                  onClickDelete={() => {
                    setDialog({
                      show: true,
                      id: value.id,
                    });
                  }}
                  onClickDetail={() => navigate(`/users/${value.id}`)}
                  onClickUpdate={() => {
                    setDrawer({
                      type: 'UPDATE',
                      show: true,
                      data: {
                        id: value.id,
                        name: value.name,
                        email: value.email,
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
      <DialogDelete
        title="Hapus user ini"
        description="Apakah anda yakin akan menghapus user ini?"
        onSuccess={() => {
          alert('berhasil');
          setDialog({
            show: false,
            id: '',
          });
        }}
        onHide={() => {
          setDialog((prev) => ({
            ...prev,
            show: false,
          }));
        }}
        show={dialog.show}
      />
    </>
  );
};

export default TableBodyAdmin;
