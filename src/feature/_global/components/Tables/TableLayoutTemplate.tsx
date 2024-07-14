import { ReactNode } from 'react';

interface ITabelLayout {
  children: ReactNode;
}

const TableLayoutTemplate = ({ children }: ITabelLayout) => {
  return (
    <div className="rounded-sm border border-stroke pb-2.5 shadow-default bg-white dark:border-strokedark dark:bg-boxdark xl:pb-1">
      {children}
    </div>
  );
};

export default TableLayoutTemplate;
