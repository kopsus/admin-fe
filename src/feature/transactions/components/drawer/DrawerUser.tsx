import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataTransactionUser, ServiceDrawerUser } from '../../store';
import { useAtom } from 'jotai';
import FormAddTransaction from '../form/formAddTransaction';
import { useEffect } from 'react';
import { IDataTransactionUsers } from '../../types';

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
      <FormAddTransaction onInputChange={onInputChange} drawer={drawer} />
    </RightDrawer>
  );
};

export default DrawerUser;
