import React from 'react';

interface TextAreaProps {
  placeholder: string;
  name: string;
  readOnly?: boolean | undefined;
  value?: string | readonly string[] | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

const TextArea = ({ name, placeholder, onChange, value }: TextAreaProps) => {
  return (
    <textarea
      className="textarea textarea-bordered w-full h-50 max-h-50 text-black-2 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
