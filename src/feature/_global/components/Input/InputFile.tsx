interface InputFileProps {
  name: string;
  readOnly?: boolean | undefined;
  value?: string | readonly string[] | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputFile = ({ name, value, onChange }: InputFileProps) => {
  return (
    <input
      type="file"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:text-black-2 file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
    />
  );
};

export default InputFile;
