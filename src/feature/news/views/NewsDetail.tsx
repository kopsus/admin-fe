import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineCreate } from 'react-icons/md';
import { ServiceDrawer } from '../store';
import { useAtom } from 'jotai';
import Drawer from '../components/drawer/Drawer';

const NewsDetail = () => {
  const [, setDrawer] = useAtom(ServiceDrawer);

  return (
    <>
      <div className="rounded-sm border border-stroke p-2.5 shadow-default bg-white dark:border-strokedark dark:bg-boxdark xl:p-5">
        {/* header news detail */}
        <div className="flex items-center justify-end gap-3 border-b-2 border-slate-200 pb-5">
          <button className="btn flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white border-none">
            <AiOutlineDelete size={20} />
            <p className="font-medium">Hapus</p>
          </button>
          <button
            className="btn flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white border-none"
            onClick={() => {
              setDrawer({
                type: 'UPDATE',
                show: true,
                data: null,
              });
            }}
          >
            <MdOutlineCreate size={20} />
            <p className="font-medium">Edit</p>
          </button>
        </div>

        <div className="h-90 rounded-md overflow-hidden my-5">
          <img
            src={
              'https://lh3.googleusercontent.com/drive-viewer/AKGpihakLR_jNOikPjvuDJGamr4y2ouuT-PCtrACIGW5HIi24krWXk8T5xPm3kE69AMHjFu-aN8q7N-_C4kpj2scM1xsAMdCXCpUqZ4=s1600-rw-v1'
            }
            alt="image"
            className="w-full h-full block object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-end">tanggal</p>
          <p className="text-xl font-semibold text-black">Title</p>
          <p>description</p>
        </div>
      </div>
      <Drawer />
    </>
  );
};

export default NewsDetail;
