import InputFile from '../../../_global/components/Input/InputFile';
import TextArea from '../../../_global/components/Input/TextArea';
import Input from '../../../_global/components/Input/Input';
import { IDrawerCreate } from '../../../_global/types';
import { EducationType } from '../../types';

interface IFormAddEducationProps {
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  drawer: IDrawerCreate<EducationType>;
}

const FormAddEducation = ({
  onInputChange,
  drawer,
}: IFormAddEducationProps) => {
  return (
    <form action="#">
      <div className="p-6.5">
        <div className="mb-3">
          <label className="mb-1 block text-black dark:text-white">Image</label>
          <InputFile name="image" />
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
            onChange={onInputChange}
            value={drawer.data?.description}
          />
        </div>

        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
          {drawer.type === 'CREATE' ? 'Tambah Edukasi' : 'Edit Edukasi'}
        </button>
      </div>
    </form>
  );
};

export default FormAddEducation;
