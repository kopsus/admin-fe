import { useAtom } from 'jotai';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataEducation, ServiceDrawer } from '../../store';
import { useEffect } from 'react';
import { EducationType } from '../../types';
import FormAddEducation from '../form/FormAddEducation';

const Drawer = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawer);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataEducation },
      }));
    }
  }, [drawer.show, drawer.type, setDrawer]);

  const onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: { name, value } }) => {
    setDrawer((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      } as EducationType,
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
      title={drawer.type === 'CREATE' ? 'Tambah Edukasi' : 'Edit Edukasi'}
    >
      <FormAddEducation drawer={drawer} onInputChange={onInputChange} />
    </RightDrawer>
  );
};

export default Drawer;
