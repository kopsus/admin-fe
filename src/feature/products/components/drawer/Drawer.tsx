import { useAtom } from 'jotai';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataProduct, ServiceDrawer } from '../../store';
import { useEffect, useState } from 'react';
import { IDataProduct } from '../../types';
import FormAddProduct from '../form/FormAddProduct';

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
      <FormAddProduct
        previewImage={previewImage}
        onInputChange={onInputChange}
        drawer={drawer}
      />
    </RightDrawer>
  );
};

export default Drawer;
