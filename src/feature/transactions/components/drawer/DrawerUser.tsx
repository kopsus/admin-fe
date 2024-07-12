import React, { useEffect } from 'react';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import {
  dummmyDataTransactionUsers,
  EmptyDataTransactionUser,
  ServiceDrawerUser,
} from '../../store';
import { useAtom } from 'jotai';
import { IDataTransactionUsers } from '../../types';
import InputText from '../../../_global/components/Input/InputText';
import InputSelectOption from '../../../_global/components/Input/InputSelectOption';

const DrawerUser = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawerUser);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataTransactionUser },
      }));
    }
  }, [drawer.show, drawer.type, setDrawer]);

  const onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = ({ target }) => {
    const { name, value, type } = target as HTMLInputElement;
    const isCheckbox = type === 'checkbox';

    setDrawer((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: isCheckbox ? (target as HTMLInputElement).checked : value,
      } as IDataTransactionUsers,
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
              value={drawer.data?.Name}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">RT</label>
            <InputSelectOption
              name="RT"
              onChange={onInputChange}
              value={drawer.data?.RT}
              disabledText=" Pilih RT"
            >
              {dummmyDataTransactionUsers.map((value, idx) => (
                <option key={idx}>{value.RT}</option>
              ))}
            </InputSelectOption>
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
              {dummmyDataTransactionUsers.map((value, idx) => (
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

export default DrawerUser;
