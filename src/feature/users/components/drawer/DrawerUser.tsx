import { useAtom } from 'jotai';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { dummyDataUser, EmptyDataUser, ServiceDrawerUser } from '../../store';
import InputText from '../../../_global/components/Input/Input';
import { IDataUser } from '../../types';
import { useEffect } from 'react';
import InputSelectOption from '../../../_global/components/Input/InputSelectOption';

const DrawerUser = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawerUser);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataUser },
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
      } as IDataUser,
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
            <label className="mb-1 block text-black dark:text-white">
              No Hp
            </label>
            <InputText
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
    </RightDrawer>
  );
};

export default DrawerUser;
