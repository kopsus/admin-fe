const Tablehead = () => {
  const headData = ['Title', 'Description'];

  return (
    <thead>
      <tr className="bg-meta-2 text-left dark:bg-slate-700 border border-stroke dark:border-boxdark font-bold">
        {headData.map((value, idx) => (
          <th key={idx} className="py-5 px-4 text-black dark:text-white">
            {value}
          </th>
        ))}
        <th className="py-4 font-medium text-black dark:text-white"></th>
      </tr>
    </thead>
  );
};

export default Tablehead;
