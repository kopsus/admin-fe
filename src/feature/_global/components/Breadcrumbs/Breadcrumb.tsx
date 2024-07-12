interface BreadcrumbProps {
  pageName: string;
  onclick?: () => void;
}
const Breadcrumb = ({ pageName, onclick }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <button
        onClick={onclick}
        className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-8 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
      >
        {`Tambah ${pageName}`}
      </button>
    </div>
  );
};

export default Breadcrumb;
