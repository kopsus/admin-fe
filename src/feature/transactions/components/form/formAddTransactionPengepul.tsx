import React from 'react';
import InputText from '../../../_global/components/Input/Input';
import { IDataTransactionPengepul } from '../../types';
import { IDrawerCreate } from '../../../_global/types';
import { DropdownJenisSampahAdmin } from '../dropdown/DropdownJenisSampah';

interface IFormAddTransactionProps {
  onInputChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  drawer: IDrawerCreate<IDataTransactionPengepul>;
}

const FormAddTransactionPengepul = ({
  drawer,
  onInputChange,
}: IFormAddTransactionProps) => {
  return (
    <form action="#">
      <div className="p-6.5">
        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Nama</label>
          <InputText
            placeholder="Nama"
            type="text"
            name="Name"
            onChange={onInputChange}
            value={drawer.data?.name || ''}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Email</label>
          <InputText
            placeholder="Example@gmail.com"
            type="email"
            name="email"
            onChange={onInputChange}
            value={drawer.data?.email || ''}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">
            Jenis Sampah
          </label>
          <DropdownJenisSampahAdmin drawer={drawer} />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Berat</label>
          <InputText
            placeholder="Berat"
            type="number"
            name="Berat"
            onChange={onInputChange}
            value={drawer.data?.Berat || ''}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Total</label>
          <InputText
            placeholder="Total"
            type="number"
            name="Total"
            onChange={onInputChange}
            value={drawer.data?.Total || ''}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">
            Status
          </label>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={drawer.data?.Status || false}
            name="Status"
            onChange={onInputChange}
          />
        </div>

        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
          {drawer.type === 'CREATE' ? 'Tambah Transaksi' : 'Edit Transaksi'}
        </button>
      </div>
    </form>
  );
};

export default FormAddTransactionPengepul;
