import { useSetAtom } from 'jotai';
import Breadcrumb from '../../_global/components/Breadcrumbs/Breadcrumb';
import Drawer from '../components/drawer/Drawer';
import TableLayout from '../components/table/TableLayout';
import { ServiceDrawer } from '../store';

const News = () => {
  const setDrawer = useSetAtom(ServiceDrawer);

  return (
    <>
      <Breadcrumb
        onclick={() => {
          setDrawer({
            show: true,
            type: 'CREATE',
            data: null,
          });
        }}
        pageName="Berita"
      />
      <TableLayout />
      <Drawer />
    </>
  );
};

export default News;
