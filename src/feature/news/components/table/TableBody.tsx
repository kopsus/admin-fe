import { useState } from 'react';
import { dummyNews, ServiceDrawer } from '../../store';
import MenuTable from '../../../_global/components/MenuEllipsTable/MenuTable';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { ServiceDialog } from '../../../_global/store';

const TableBody = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [, setDrawer] = useAtom(ServiceDrawer);
  const [, setDialog] = useAtom(ServiceDialog);
  const navigate = useNavigate();

  return (
    <>
      <tbody>
        {dummyNews.map((value, idx) => (
          <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark min-w-30 max-w-50">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 min-w-15 max-w-15 rounded-md overflow-hidden">
                  <img
                    src={value.image}
                    alt="Product"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <p className="text-black dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
                  {value.title}
                </p>
              </div>
            </td>
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
              <p className="text-black dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
                {value.description}
              </p>
            </td>
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
              <p className="text-black dark:text-white">{value.createdAt}</p>
            </td>
            <td className="border-b border-[#eee] py-4 pr-2 md:pr-4 dark:border-strokedark text-right">
              <MenuTable
                id={idx}
                onClickDelete={() => {
                  setDialog({
                    show: true,
                    id: value.id,
                  });
                }}
                onClickDetail={() => navigate(`/berita/${value.id}`)}
                onClickUpdate={() => {
                  setDrawer({
                    type: 'UPDATE',
                    show: true,
                    data: {
                      id: value.id,
                      title: value.title,
                      image: value.image,
                      createdAt: value.createdAt,
                      description: value.description,
                    },
                  });
                }}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
