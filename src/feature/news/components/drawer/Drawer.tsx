import { useAtom } from 'jotai';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataNews, ServiceDrawer } from '../../store';
import { useEffect, useState } from 'react';
import { ITableNew } from '../../types';
import FormAddNews from '../form/formAddNews';

const Drawer = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawer);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataNews },
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
            [name]: file.name, // Store the file name or handle it as needed
          } as ITableNew,
        }));
      }
    } else {
      setDrawer((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [name]: value,
        } as ITableNew,
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
      }}
      title={drawer.type === 'CREATE' ? 'Tambah Berita' : 'Edit Berita'}
    >
      <FormAddNews
        previewImage={previewImage}
        onInputChange={onInputChange}
        drawer={drawer}
      />
    </RightDrawer>
  );
};

export default Drawer;
