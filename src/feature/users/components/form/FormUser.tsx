import Input from '../../../_global/components/Input/Input';
import InputSelectOption from '../../../_global/components/Input/InputSelectOption';
import { IDrawerCreate } from '../../../_global/types';
import { dummyDataUser } from '../../store';
import { IDataUser } from '../../types';

interface IFormUserProps {
  onInputChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  drawer: IDrawerCreate<IDataUser>;
}

const FormUser = ({ onInputChange, drawer }: IFormUserProps) => {
  return (
    <form action="#">
      <div className="p-6.5">
        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Nama</label>
          <Input
            placeholder="Nama"
            type="text"
            name="name"
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
            {dummyDataUser.map((value, idx) => (
              <option key={idx}>{value.RT}</option>
            ))}
          </InputSelectOption>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">No Hp</label>
          <Input
            placeholder="No Hp"
            type="number"
            name="No Hp"
            onChange={onInputChange}
            value={drawer.data?.NoHp}
          />
        </div>

        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
          {drawer.type === 'CREATE' ? 'Tambah Pengguna' : 'Edit Pengguna'}
        </button>
      </div>
    </form>
  );
};

export default FormUser;
