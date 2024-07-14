import { atom } from 'jotai';
import { IDataTransactionPengepul, IDataTransactionUsers } from '../types';
import { IDrawerCreate } from '../../_global/types';
import { IActiveTab, IRT } from '../../users/types';

export const dummmyDataTransactionUsers: IDataTransactionUsers[] = [
  {
    id: '1',
    Name: 'Jhone Chena',
    RT: 1,
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
      {
        id: '2',
        name: 'Botol Kaca',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: false,
    role: 'Masyarakat',
  },
  {
    id: '2',
    Name: 'The Rock',
    RT: 2,
    JenisSampah: [
      {
        id: '3',
        name: 'Botol plastik',
      },
      {
        id: '2',
        name: 'Botol Kaca',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: true,
    role: 'Masyarakat',
  },
  {
    id: '3',
    Name: 'Undertaker',
    RT: 3,
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
      {
        id: '3',
        name: 'Botol plastik',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: true,
    role: 'Masyarakat',
  },
  {
    id: '4',
    Name: 'Batista',
    RT: 4,
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: false,
    role: 'Masyarakat',
  },
  {
    id: '5',
    Name: 'Wiz Khalifa',
    RT: 2,
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
      {
        id: '2',
        name: 'Botol Kaca',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: true,
    role: 'Agen',
  },
  {
    id: '6',
    Name: 'Snoop Dog',
    RT: 3,
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
      {
        id: '3',
        name: 'Botol plastik',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: true,
    role: 'Agen',
  },
  {
    id: '7',
    Name: 'Eminem',
    RT: 4,
    JenisSampah: [
      {
        id: '2',
        name: 'Botol Kaca',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: false,
    role: 'Agen',
  },
];

export const dummmyDataTransactionPengepul: IDataTransactionPengepul[] = [
  {
    id: '1',
    name: 'Randy Pangalila',
    email: 'randy@gmail.com',
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
      {
        id: '2',
        name: 'Botol Kaca',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: false,
    role: 'Pengepul',
  },
  {
    id: '2',
    name: 'Jakson Karmila',
    email: 'kkj@gmail.com',
    JenisSampah: [
      {
        id: '1',
        name: 'kardus',
      },
      {
        id: '3',
        name: 'Botol plastik',
      },
    ],
    Berat: '12',
    Total: 20000,
    Status: false,
    role: 'Pengepul',
  },
];

export const dummyDataRT: IRT[] = [
  {
    id: '1',
    name: '1',
  },
  {
    id: '2',
    name: '2',
  },
  {
    id: '3',
    name: '3',
  },
  {
    id: '4',
    name: '4',
  },
];

export const EmptyDataTransactionUser: IDataTransactionUsers = {
  id: '',
  Berat: '',
  JenisSampah: [],
  Name: '',
  RT: '',
  Status: false,
  Total: '',
  role: '',
};

export const EmptyDataTransactionPengepul: IDataTransactionPengepul = {
  id: '',
  Berat: '',
  JenisSampah: [],
  name: '',
  email: '',
  Status: false,
  Total: '',
  role: '',
};

export const ServiceDrawerUser = atom<IDrawerCreate<IDataTransactionUsers>>({
  show: false,
  type: 'CREATE',
  data: null,
});

export const ServiceDrawerAdmin = atom<IDrawerCreate<IDataTransactionPengepul>>(
  {
    show: false,
    type: 'CREATE',
    data: null,
  },
);

export const ServiceActiveTab = atom<IActiveTab>({
  name: 'Masyarakat',
});
