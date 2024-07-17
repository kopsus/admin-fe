import { useAtom } from 'jotai';
import InputFile from '../../../_global/components/Input/InputFile';
import InputText from '../../../_global/components/Input/Input';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataProduct, ServiceDrawer } from '../../store';
import { useEffect, useState } from 'react';
import { IDataProduct } from '../../types';

const Drawer = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawer);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataProduct },
      }));
      setPreviewImage(null);
    }
  }, [drawer.show, drawer.type, setDrawer]);

  const onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { name, value, type } = target as HTMLInputElement;

    if (type === 'file') {
      const file = (target as HTMLInputElement).files?.[0];
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
        setDrawer((prev) => ({
          ...prev,
          data: {
            ...prev.data,
            [name]: file.name,
          } as IDataProduct,
        }));
      }
    } else {
      setDrawer((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [name]: value,
        } as IDataProduct,
      }));
    }
  };

  return (
    <RightDrawer
      show={drawer.show}
      onHide={() => {
        setDrawer((prev) => ({
          ...prev,
          show: false,
        }));
        setDrawer((prev) => ({
          ...prev,
          data: { ...EmptyDataProduct },
        }));
        setPreviewImage(null);
      }}
      title={drawer.type === 'CREATE' ? 'Tambah Produk' : 'Edit Produk'}
    >
      <form action="#">
        <div className="p-6.5">
          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Image
            </label>
            {previewImage || drawer.data?.image ? (
              <div className="h-30 min-w-32 max-w-15 rounded-md overflow-hidden mb-2">
                <img
                  src={previewImage || drawer.data?.image}
                  alt="Product"
                  className="w-full h-full object-cover block"
                />
              </div>
            ) : null}
            <InputFile name="image" onChange={onInputChange} />
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
