import { useAtomValue } from 'jotai';
import { ServiceActiveTab } from '../../store';

const TableHead = () => {
  const activeTab = useAtomValue(ServiceActiveTab);
  const headData =
    activeTab.name === 'Masyarakat' || activeTab.name === 'Agen'
      ? ['Name', 'RT', 'No Hp']
      : ['Name', 'Email'];

  return (
    <thead>
      <tr className="bg-meta-2 text-left dark:bg-slate-700 border border-stroke dark:border-boxdark font-bold">
        {headData.map((value, idx) => (
          <th
            key={idx}
            className="min-w-[120px] py-5 px-4 text-black  dark:text-white"
          >
            {value}
          </th>
        ))}
        <th className="py-4 text-black dark:text-white"></th>
      </tr>
    </thead>
  );
};

export default TableHead;
