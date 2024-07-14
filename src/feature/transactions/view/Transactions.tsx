import { useAtomValue, useSetAtom } from 'jotai';
import Breadcrumb from '../../_global/components/Breadcrumbs/Breadcrumb';
import TableLayout from '../components/table/TableLayout';
import {
  ServiceActiveTab,
  ServiceDrawerAdmin,
  ServiceDrawerUser,
} from '../store';
import DrawerUser from '../components/drawer/DrawerUser';
import DrawerPengepul from '../components/drawer/DrawerPengepul';
import { useNavigate } from 'react-router-dom';

const Transactions = () => {
  const setDrawerUser = useSetAtom(ServiceDrawerUser);
  const setDrawerAdmin = useSetAtom(ServiceDrawerAdmin);
  const activeTab = useAtomValue(ServiceActiveTab);
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb
        onclick={() => {
          activeTab.name === 'Agen' || activeTab.name === 'Masyarakat'
            ? setDrawerUser({
                show: true,
                type: 'CREATE',
                data: null,
              })
            : setDrawerAdmin({
                show: true,
                type: 'CREATE',
                data: null,
              });
          // navigate('/transaction/create');
        }}
        pageName="Transaksi"
      />
      <TableLayout />
      <DrawerUser />
      <DrawerPengepul />
    </>
  );
};

export default Transactions;
