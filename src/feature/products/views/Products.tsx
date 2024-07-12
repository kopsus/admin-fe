import { useSetAtom } from 'jotai';
import Breadcrumb from '../../_global/components/Breadcrumbs/Breadcrumb';
import TableLayout from '../components/table/TableLayout';
import { ServiceDrawer } from '../store';
import Drawer from '../components/drawer/Drawer';

const Products = () => {
  const setDrawer = useSetAtom(ServiceDrawer);

  return (
    <>
      <Breadcrumb
        onclick={() =>
          setDrawer({
            show: true,
            type: 'CREATE',
            data: null,
          })
        }
        pageName="Produk"
      />
      <TableLayout />
      <Drawer />
    </>
  );
};

export default Products;
