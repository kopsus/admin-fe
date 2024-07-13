import { ReactNode } from 'react';

interface InputSelectOptionProps {
  children: ReactNode;
  readOnly?: boolean | undefined;
  value?: string | readonly string[] | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  name: string;
  disabledText: string;
}

const InputSelectOption = ({
  children,
  value,
  onChange,
  name,
  disabledText,
}: InputSelectOptionProps) => {
  return (
    <select
      className="select select-bordered w-full bg-white dark:bg-form-input dark:text-white dark:focus:border-primary dark:border-form-strokedark text-black-2"
      value={value}
      onChange={onChange}
      name={name}
    >
      <option disabled value={''}>
        {disabledText}
      </option>
      {children}
    </select>
  );
};

export default InputSelectOption;
