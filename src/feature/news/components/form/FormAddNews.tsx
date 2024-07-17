import Input from '../../../_global/components/Input/Input';
import InputFile from '../../../_global/components/Input/InputFile';
import TextArea from '../../../_global/components/Input/TextArea';
import { IDrawerCreate } from '../../../_global/types';
import { ITableNew } from '../../types';

interface IFormAddNewsProps {
  previewImage: string | null;
  drawer: IDrawerCreate<ITableNew>;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

const FormAddNews = ({
  previewImage,
  drawer,
  onInputChange,
}: IFormAddNewsProps) => {
  return (
    <form action="#">
      <div className="p-6.5">
        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Image</label>
          {previewImage || drawer.data?.image ? (
            <div className="h-30 min-w-32 max-w-15 rounded-md overflow-hidden mb-2">
              <img
                src={previewImage || drawer.data?.image}
                alt="Product"
                className="w-full h-full object-cover block"
              />
            </div>
          ) : null}
          <InputFile
            name="image"
            onChange={onInputChange}
            value={drawer.data?.image}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Judul</label>
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
  );
};

export default FormAddNews;
