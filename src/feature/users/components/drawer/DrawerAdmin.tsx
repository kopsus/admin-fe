import React, { useEffect } from 'react';
import { EmptyDataAdmin, ServiceDrawerAdmin } from '../../store';
import { useAtom } from 'jotai';
import { IDataAdmin } from '../../types';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import InputText from '../../../_global/components/Input/InputText';

const DrawerAdmin = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawerAdmin);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataAdmin },
      }));
    }
  }, [drawer.show, drawer.type, setDrawer]);

  const onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = ({ target: { name, value } }) => {
    setDrawer((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      } as IDataAdmin,
    }));
  };

  return (
    <RightDrawer
      show={drawer.show}
      onHide={() => {
        setDrawer((prev) => ({
          ...prev,
          show: false,
        }));
      }}
      title={drawer.type === 'CREATE' ? 'Tambah Pengguna' : 'Edit Pengguna'}
    >
      <form action="#">
        <div className="p-6.5">
          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Nama
            </label>
            <InputText
              placeholder="Nama"
              type="text"
              name="name"
              onChange={onInputChange}
              value={drawer.data?.name}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Email
            </label>
            <InputText
              placeholder="Email"
              type="email"
              name="email"
              onChange={onInputChange}
              value={drawer.data?.email}
            />
          </div>

          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
            {drawer.type === 'CREATE' ? 'Tambah Pengguna' : 'Edit Pengguna'}
          </button>
        </div>
      </form>
    </RightDrawer>
  );
};

export default DrawerAdmin;
