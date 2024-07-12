import { ReactNode } from 'react';
import { MdCancel } from 'react-icons/md';

interface RightDrawerProps {
  show: boolean;
  onHide: () => void;
  title: string;
  children: ReactNode;
}

const RightDrawer = ({ children, title, show, onHide }: RightDrawerProps) => {
  return (
    <>
      {/* Overlay untuk menutupi seluruh body aplikasi */}
      {show && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          style={{ pointerEvents: 'auto' }}
          onClick={onHide}
        />
      )}

      <div
        className={`rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-4/5 md:w-1/3 2xl:w-1/5 fixed top-0 right-0 min-h-[100vh] overflow-y-auto ${show ? 'block' : 'hidden'}`}
        style={{
          zIndex: 100,
          pointerEvents: show ? 'auto' : 'none',
          scrollbarWidth: 'none',
        }}
      >
        <div className="absolute min-h-[100vh] w-full">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <div className="flex justify-end cursor-pointer" onClick={onHide}>
              <MdCancel size={28} color="red" className="hover:scale-105" />
            </div>
            <h3 className="font-medium text-black dark:text-white">{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default RightDrawer;
