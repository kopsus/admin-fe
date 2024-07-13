import { dummyProducts, ServiceDrawer } from '../../store';
import ProductOne from '../../../../core/assets/product/product-01.png';
import { useState } from 'react';
import MenuTable from '../../../_global/components/MenuEllipsTable/MenuTable';
import { useAtom } from 'jotai';
import { ServiceDialog } from '../../../_global/store';

const Tablebody = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [, setDrawer] = useAtom(ServiceDrawer);
  const [, setDialog] = useAtom(ServiceDialog);

  return (
    <>
      <tbody>
        {dummyProducts.map((value, idx) => (
          <tr key={idx} className="hover:bg-slate-100 dark:hover:bg-slate-800">
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={ProductOne} alt="Product" />
                </div>
                <p className="text-black dark:text-white overflow-hidden whitespace-nowrap text-ellipsis max-w-20">
                  {value.title}
                </p>
              </div>
            </td>
            <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark max-w-96">
              <p className="text-black dark:text-white max-w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">
                {value.price} /Ons
              </p>
            </td>
            <td className="border-b border-[#eee] py-4 pr-4 dark:border-strokedark text-right">
              <MenuTable
                id={idx}
                onClickDelete={() => {
                  setDialog({
                    show: true,
                    id: value.id,
                  });
                }}
                onClickUpdate={() => {
                  setDrawer({
                    type: 'UPDATE',
                    show: true,
                    data: {
                      id: value.id,
                      image: value.image,
                      title: value.title,
                      price: value.price,
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

export default Tablebody;
