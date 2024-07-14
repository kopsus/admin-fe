import React, { useEffect } from 'react';
import { EmptyDataTransactionPengepul, ServiceDrawerAdmin } from '../../store';
import { useAtom } from 'jotai';
import { IDataTransactionPengepul } from '../../types';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import FormAddTransactionPengepul from '../form/formAddTransactionPengepul';

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
  > = ({ target }) => {
    const { name, value, type } = target as HTMLInputElement;
    const isCheckbox = type === 'checkbox';

    setDrawer((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: isCheckbox ? (target as HTMLInputElement).checked : value,
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
      <FormAddTransactionPengepul
        onInputChange={onInputChange}
        drawer={drawer}
      />
    </RightDrawer>
  );
};

export default DrawerPengepul;
