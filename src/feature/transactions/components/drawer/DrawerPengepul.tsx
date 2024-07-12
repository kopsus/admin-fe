import React, { useEffect } from 'react';
import {
  dummmyDataTransactionPengepul,
  EmptyDataTransactionPengepul,
  ServiceDrawerAdmin,
} from '../../store';
import { useAtom } from 'jotai';
import { IDataTransactionPengepul } from '../../types';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import InputText from '../../../_global/components/Input/InputText';
import InputSelectOption from '../../../_global/components/Input/InputSelectOption';

const DrawerPengepul = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawerAdmin);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataTransactionPengepul },
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
      } as IDataTransactionPengepul,
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
      title={drawer.type === 'CREATE' ? 'Tambah Transaksi' : 'Edit Transaksi'}
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
              name="Name"
              onChange={onInputChange}
              value={drawer.data?.name}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Email
            </label>
            <InputText
              placeholder="Example@gmail.com"
              type="email"
              name="email"
              onChange={onInputChange}
              value={drawer.data?.email}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Jenis Sampah
            </label>
            <InputSelectOption
              name="JenisSampah"
              onChange={onInputChange}
              value={drawer.data?.JenisSampah}
              disabledText=" Pilih Jenis Sampah"
            >
              {dummmyDataTransactionPengepul.map((value, idx) => (
                <option key={idx}>{value.JenisSampah}</option>
              ))}
            </InputSelectOption>
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Berat
            </label>
            <InputText
              placeholder="Berat"
              type="number"
              name="Berat"
              onChange={onInputChange}
              value={drawer.data?.Berat}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Total
            </label>
            <InputText
              placeholder="Total"
              type="number"
              name="Total"
              onChange={onInputChange}
              value={drawer.data?.Total}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Status
            </label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={drawer.data?.Status}
              name="Status"
              onChange={onInputChange}
            />
          </div>

          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
            {drawer.type === 'CREATE' ? 'Tambah Transaksi' : 'Edit Transaksi'}
          </button>
        </div>
      </form>
    </RightDrawer>
  );
};

export default DrawerPengepul;
