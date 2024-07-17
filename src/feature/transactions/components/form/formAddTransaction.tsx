import { dummmyDataTransactionUsers } from '../../store';
import InputText from '../../../_global/components/Input/Input';
import InputSelectOption from '../../../_global/components/Input/InputSelectOption';
import { IDataTransactionUsers } from '../../types';
import { IDrawerCreate } from '../../../_global/types';
import { DropdownJenisSampahUsers } from '../dropdown/DropdownJenisSampah';

interface IFormAddTransaction {
  onInputChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  drawer: IDrawerCreate<IDataTransactionUsers>;
}

const FormAddTransaction = ({ onInputChange, drawer }: IFormAddTransaction) => {
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
            value={drawer.data?.Name || ''}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">RT</label>
          <InputSelectOption
            name="RT"
            onChange={onInputChange}
            value={drawer.data?.RT || ''}
            disabledText=" Pilih RT"
          >
            {dummmyDataTransactionUsers.map((value, idx) => (
              <option key={idx} value={value.RT}>
                {value.RT}
              </option>
            ))}
          </InputSelectOption>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">
            Jenis Sampah
          </label>
          <DropdownJenisSampahUsers drawer={drawer} />
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

export default FormAddTransaction;
