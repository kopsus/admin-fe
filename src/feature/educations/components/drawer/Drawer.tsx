import { useAtom } from 'jotai';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataEducation, ServiceDrawer } from '../../store';
import { useEffect, useState } from 'react';
import { EducationType } from '../../types';
import FormAddEducation from '../form/FormAddEducation';

const Drawer = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawer);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataEducation },
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
          } as EducationType,
        }));
      }
    } else {
      setDrawer((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [name]: value,
        } as EducationType,
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
          data: { ...EmptyDataEducation },
        }));
        setPreviewImage(null);
      }}
      title={drawer.type === 'CREATE' ? 'Tambah Edukasi' : 'Edit Edukasi'}
    >
      <FormAddEducation
        drawer={drawer}
        onInputChange={onInputChange}
        previewImage={previewImage}
      />
    </RightDrawer>
  );
};

export default Drawer;
