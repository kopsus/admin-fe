import { useAtom } from 'jotai';
import InputText from '../../../_global/components/Input/InputText';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataNews, ServiceDrawer } from '../../store';
import InputFile from '../../../_global/components/Input/InputFile';
import DatePickerOne from '../../../_global/components/DatePicker/DatePickerOne';
import { useEffect } from 'react';
import { ITableNew } from '../../types';
import TextArea from '../../../_global/components/Input/TextArea';

const Drawer = () => {
  const [drawer, setDrawer] = useAtom(ServiceDrawer);

  useEffect(() => {
    if (drawer.show && drawer.type === 'CREATE') {
      setDrawer((prev) => ({
        ...prev,
        data: { ...EmptyDataNews },
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
      } as ITableNew,
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
      title={drawer.type === 'CREATE' ? 'Tambah Berita' : 'Edit Berita'}
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
              Deskripsi
            </label>
            <TextArea
              placeholder="Deskripsi"
              name="description"
              value={drawer.data?.description}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Tanggal
            </label>
            <DatePickerOne />
          </div>

          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
            {drawer.type === 'CREATE' ? 'Tambah Berita' : 'Edit Berita'}
          </button>
        </div>
      </form>
    </RightDrawer>
  );
};

export default Drawer;
