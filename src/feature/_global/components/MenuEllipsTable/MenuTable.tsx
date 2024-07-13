import { ReactNode } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineCreate } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';

interface IButtonMenuTableProps {
  children: ReactNode;
  onClick?: () => void;
}

interface IMenuTableProps {
  id: number;
  onClickDetail?: () => void;
  onClickUpdate?: () => void;
  onClickDelete?: () => void;
  activeMenu?: number | null;
  setActiveMenu: (id: number | null) => void;
}

export const ButtonMenuTable: React.FC<IButtonMenuTableProps> = ({
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-10 flex flex-col rounded-md text-sm border border-stroke bg-white shadow-default dark:border-strokedark p-2"
    >
      {children}
    </div>
  );
};

const MenuTable = ({
  id,
  onClickDelete,
  onClickDetail,
  onClickUpdate,
  activeMenu,
  setActiveMenu,
}: IMenuTableProps) => {
  const toggleMenu = () => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleDelete = () => {
    if (onClickDelete) onClickDelete();
    setActiveMenu(null);
  };

  const handleDetail = () => {
    if (onClickDetail) onClickDetail();
    setActiveMenu(null);
  };

  const handleUpdate = () => {
    if (onClickUpdate) onClickUpdate();
    setActiveMenu(null);
  };

  return (
    <div>
      <button
        className="btn btn-sm bg-white border-slate-200"
        onClick={toggleMenu}
      >
        <BsThreeDots />
      </button>
      {activeMenu === id && (
        <ButtonMenuTable>
          {onClickDelete && (
            <div
              className="flex items-center gap-1 text-red-500 hover:bg-slate-200 cursor-pointer p-2 rounded-md"
              onClick={handleDelete}
            >
              <AiOutlineDelete size={20} />
              <p className="font-medium">Hapus</p>
            </div>
          )}
          {onClickDetail && (
            <div
              className="flex items-center gap-1 hover:bg-slate-200 cursor-pointer p-2 rounded-md text-black"
              onClick={handleDetail}
            >
              <BiMessageSquareDetail size={20} />
              <p className="font-medium">detail</p>
            </div>
          )}
          {onClickUpdate && (
            <div
              className="flex items-center gap-1 hover:bg-slate-200 cursor-pointer p-2 rounded-md text-black"
              onClick={handleUpdate}
            >
              <MdOutlineCreate size={20} />
              <p className="font-medium">Edit</p>
            </div>
          )}
        </ButtonMenuTable>
      )}
    </div>
  );
};

export default MenuTable;
