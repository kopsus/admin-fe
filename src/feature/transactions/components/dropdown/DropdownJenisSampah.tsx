import { Dropdown } from '@hudoro/dropdown';
import { dummyDataJenisSampah } from '../../../_global/store';
import { IDataTransactionUsers } from '../../types';
import { IDrawerCreate } from '../../../_global/types';
import { dummmyDataTransactionUsers } from '../../store';

interface UserOption {
  label: string;
  value: string;
}

interface IDropdownJenisSampah {
  drawer: IDrawerCreate<IDataTransactionUsers>;
}

const DropdownJenisSampah = ({ drawer }: IDropdownJenisSampah) => {
  const JenisSampahList: UserOption[] = dummyDataJenisSampah.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  return (
    <Dropdown
      placeholder="Pilih Jenis Sampah"
      dropdownLists={JenisSampahList}
      onChange={(e) => {
        console.log('e', e);
      }}
      defaultValue={
        drawer.data && drawer.data.JenisSampah.length < 0
          ? []
          : drawer.data?.JenisSampah.map((item) => ({
              label: item.name,
              value: item.id,
            }))
      }
      multiSelect
      searchAble
      onSearch={(e) => console.log(e)}
    />
  );
};

export default DropdownJenisSampah;
