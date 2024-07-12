import { useAtom } from 'jotai';
import InputFile from '../../../_global/components/Input/InputFile';
import InputText from '../../../_global/components/Input/InputText';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataProduct, ServiceDrawer } from '../../store';
import { useEffect } from 'react';
import { IDataProduct } from '../../types';

const Drawer = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawer);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataProduct },
      }));
    }
  }, [drawer.show, drawer.type, setDrawer]);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setDrawer((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      } as IDataProduct,
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
      title={drawer.type === 'CREATE' ? 'Tambah Produk' : 'Edit Produk'}
    >
      <form action="#">
        <div className="p-6.5">
          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Image
            </label>
            <InputFile name="image" />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Judul
            </label>
            <InputText
              placeholder="Judul"
              type="text"
              name="title"
              onChange={onInputChange}
              value={drawer.data?.title}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Price
            </label>
            <InputText
              placeholder="Price"
              type="number"
              name="price"
              onChange={onInputChange}
              value={drawer.data?.price}
            />
          </div>

          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
            {drawer.type === 'CREATE' ? 'Tambah Produk' : 'Edit Produk'}
          </button>
        </div>
      </form>
    </RightDrawer>
  );
};

export default Drawer;
