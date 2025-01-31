interface InputProps {
  placeholder?: string;
  type: string;
  name: string;
  readOnly?: boolean | undefined;
  value?: string | readonly string[] | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  placeholder,
  type,
  name,
  value = '',
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="input input-bordered w-full text-black-2 bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
    />
  );
};

export default Input;
