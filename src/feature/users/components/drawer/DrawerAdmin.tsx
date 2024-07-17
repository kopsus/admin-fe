import React, { useEffect } from 'react';
import { EmptyDataAdmin, ServiceDrawerAdmin } from '../../store';
import { useAtom } from 'jotai';
import { IDataAdmin } from '../../types';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import FormAdmin from '../form/FormAdmin';

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
      <FormAdmin drawer={drawer} onInputChange={onInputChange} />
    </RightDrawer>
  );
};

export default DrawerAdmin;
