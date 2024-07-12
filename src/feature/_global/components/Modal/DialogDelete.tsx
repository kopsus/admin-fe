interface IDialogDeleteProps {
  title: string;
  description: string;
  onHide: () => void;
  onSuccess: () => void;
  show: boolean;
}

const DialogDelete = ({
  title,
  description,
  onHide,
  onSuccess,
  show,
}: IDialogDeleteProps) => {
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          style={{ pointerEvents: 'auto' }}
          onClick={onHide}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-screen flex flex-col justify-center items-center w-full ${show ? 'block' : 'hidden'}`}
        style={{
          zIndex: 100,
          pointerEvents: show ? 'auto' : 'none',
          scrollbarWidth: 'none',
        }}
      >
        <div className="modal-box text-center">
          <h3 className="text-2xl font-bold text-black-2">{title}</h3>
          <p className="py-4 text-lg text-black-2">{description}</p>
          <div className="modal-action justify-center">
            <button className="btn btn-error text-white" onClick={onSuccess}>
              Hapus
            </button>
            <button className="btn" onClick={onHide}>
              Batal!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogDelete;
