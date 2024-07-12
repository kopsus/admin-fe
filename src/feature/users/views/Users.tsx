import { useAtomValue, useSetAtom } from 'jotai';
import Breadcrumb from '../../_global/components/Breadcrumbs/Breadcrumb';
import TableLayout from '../components/table/TableLayout';
import {
  ServiceActiveTab,
  ServiceDrawerAdmin,
  ServiceDrawerUser,
} from '../store';
import DrawerUser from '../components/drawer/DrawerUser';
import DrawerAdmin from '../components/drawer/DrawerAdmin';

const Users = () => {
  const setDrawerUser = useSetAtom(ServiceDrawerUser);
  const setDrawerAdmin = useSetAtom(ServiceDrawerAdmin);
  const activeTab = useAtomValue(ServiceActiveTab);

  return (
    <>
      <Breadcrumb
        onclick={() =>
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
              })
        }
        pageName="Pengguna"
      />
      <TableLayout />
      <DrawerUser />
      <DrawerAdmin />
    </>
  );
};

export default Users;
