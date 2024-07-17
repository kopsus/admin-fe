import { useAtom } from 'jotai';
import Input from '../../../_global/components/Input/Input';
import RightDrawer from '../../../_global/components/RightDrawer/RightDrawer';
import { EmptyDataNews, ServiceDrawer } from '../../store';
import InputFile from '../../../_global/components/Input/InputFile';
import { useEffect, useState } from 'react';
import { ITableNew } from '../../types';
import TextArea from '../../../_global/components/Input/TextArea';

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
      <form action="#">
        <div className="p-6.5">
          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Image
            </label>
            <div className="h-30 min-w-32 max-w-15 rounded-md overflow-hidden mb-2">
              <img
                src={previewImage || drawer.data?.image}
                alt="Product"
                className="w-full h-full object-cover block"
              />
            </div>
            <InputFile name="image" onChange={onInputChange} />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-black dark:text-white">
              Judul
            </label>
            <Input
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
            <Input
              type="date"
              name="createdAt"
              value={drawer.data?.createdAt}
              onChange={onInputChange}
            />
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
