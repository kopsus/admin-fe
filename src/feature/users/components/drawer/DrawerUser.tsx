import { useAtom } from 'jotai';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataUser, ServiceDrawerUser } from '../../store';
import { IDataUser } from '../../types';
import { useEffect } from 'react';
import FormUser from '../form/FormUser';

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
      <FormUser onInputChange={onInputChange} drawer={drawer} />
    </RightDrawer>
  );
};

export default DrawerUser;
