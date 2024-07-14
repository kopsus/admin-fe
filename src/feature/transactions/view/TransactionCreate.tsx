// import InputSelectOption from '../../_global/components/Input/InputSelectOption';
// import { IoIosArrowRoundBack } from 'react-icons/io';
// import { dummyDataJenisSampah, dummyDataRT } from '../store';
// import InputText from '../../_global/components/Input/InputText';

// const TransactionCreate = () => {
//   return (
//     <div className="rounded-sm border border-stroke p-5 shadow-default bg-white dark:border-strokedark dark:bg-boxdark">
//       <div className="flex items-center gap-2 cursor-pointer hover:text-black-2">
//         <IoIosArrowRoundBack size={28} />
//         <p className="">Transaksi</p>
//       </div>

//       <div className="flex gap-5 mt-10">
//         <div className="rounded-lg border border-stroke p-5 shadow-default bg-white dark:border-strokedark dark:bg-boxdark w-full">
//           <p>Tambahkan</p>
//           <form action="" className="mt-7">
//             <div className="mb-3">
//               <label className="mb-1 block text-black dark:text-white">
//                 Jenis Sampah
//               </label>
//               <InputSelectOption
//                 name="JenisSampah"
//                 // onChange={onInputChange}
//                 // value={drawer.data?.JenisSampah}
//                 disabledText=" Pilih Jenis Sampah"
//               >
//                 {dummyDataJenisSampah.map((value, idx) => (
//                   <option key={idx} value={value.id}>
//                     {value.name}
//                   </option>
//                 ))}
//               </InputSelectOption>
//             </div>
//             <div className="mb-3">
//               <label className="mb-1 block text-black dark:text-white">
//                 Berat
//               </label>
//               <InputText
//                 placeholder="Berat"
//                 name="Berat"
//                 type="text"
//                 // onChange={onInputChange}
//                 // value={drawer.data?.JenisSampah}
//               ></InputText>
//             </div>
//             <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-5">
//               Tambahkan
//             </button>
//           </form>
//         </div>

//         <div className="rounded-lg border border-stroke p-5 shadow-default bg-white dark:border-strokedark dark:bg-boxdark w-full">
//           <p>Jual Sampah</p>
//           <form action="#" className="mt-7">
//             <div className="p-6.5">
//               <div className="mb-3">
//                 <label className="mb-1 block text-black dark:text-white">
//                   Nama
//                 </label>
//                 <InputText
//                   placeholder="Nama"
//                   type="text"
//                   name="Name"
//                   // onChange={onInputChange}
//                   // value={drawer.data?.Name}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="mb-1 block text-black dark:text-white">
//                   RT
//                 </label>
//                 <InputSelectOption
//                   name="RT"
//                   // onChange={onInputChange}
//                   // value={drawer.data?.RT}
//                   disabledText=" Pilih RT"
//                 >
//                   {dummyDataRT.map((value, idx) => (
//                     <option key={idx} value={value.id}>
//                       {value.name}
//                     </option>
//                   ))}
//                 </InputSelectOption>
//               </div>

//               <div className="mb-3">
//                 <label className="mb-1 block text-black dark:text-white">
//                   Jenis Sampah
//                 </label>
//                 <InputSelectOption
//                   name="JenisSampah"
//                   // onChange={onInputChange}
//                   // value={drawer.data?.JenisSampah}
//                   disabledText=" Pilih Jenis Sampah"
//                 >
//                   {dummyDataJenisSampah.map((value, idx) => (
//                     <option key={idx} value={value.name}>
//                       {value.name}
//                     </option>
//                   ))}
//                 </InputSelectOption>
//               </div>

//               <div className="mb-3">
//                 <label className="mb-1 block text-black dark:text-white">
//                   Berat
//                 </label>
//                 <InputText
//                   placeholder="Berat"
//                   type="number"
//                   name="Berat"
//                   // onChange={onInputChange}
//                   // value={drawer.data?.Berat}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="mb-1 block text-black dark:text-white">
//                   Total
//                 </label>
//                 <InputText
//                   placeholder="Total"
//                   type="number"
//                   name="Total"
//                   // onChange={onInputChange}
//                   // value={drawer.data?.Total}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="mb-1 block text-black dark:text-white">
//                   Status
//                 </label>
//                 <input
//                   type="checkbox"
//                   className="toggle toggle-primary"
//                   // checked={drawer.data?.Status}
//                   name="Status"
//                   // onChange={onInputChange}
//                 />
//               </div>

//               <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-10">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionCreate;
