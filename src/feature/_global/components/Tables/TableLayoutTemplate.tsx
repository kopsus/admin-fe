import { ReactNode } from 'react';

interface ITabelLayout {
  children: ReactNode;
  // onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TableLayoutTemplate = ({ children }: ITabelLayout) => {
  return (
    <div className="rounded-sm border border-stroke pb-2.5 shadow-default bg-white dark:border-strokedark dark:bg-boxdark xl:pb-1">
      {/* <div className="flex justify-end">
        <label className="input input-bordered flex items-center gap-2  md:w-1/3 m-3 text-black">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            name="search"
            onChange={onSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">{children}</table>
      </div> */}
      {children}
    </div>
  );
};

export default TableLayoutTemplate;
