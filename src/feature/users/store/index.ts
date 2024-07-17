import { atom } from 'jotai';
import { IActiveTab, IDataAdmin, IDataUser, IRoleUsers } from '../types';
import { IDrawerCreate } from '../../_global/types';

export const dummyDataUser: IDataUser[] = [
  {
    id: '1',
    Name: 'Jhone Chena',
    RT: 1,
    NoHp: 629123810312,
    role: 'Masyarakat',
  },
  {
    id: '2',
    Name: 'The Rock',
    RT: 2,
    NoHp: 629123810312,
    role: 'Masyarakat',
  },
  {
    id: '3',
    Name: 'Undertaker',
    RT: 3,
    NoHp: 629123810312,
    role: 'Masyarakat',
  },
  {
    id: '4',
    Name: 'Batista',
    RT: 4,
    NoHp: 629123810312,
    role: 'Masyarakat',
  },
  {
    id: '5',
    Name: 'Wiz Khalifa',
    RT: 2,
    NoHp: 629123810312,
    role: 'Agen',
  },
  {
    id: '6',
    Name: 'Snoop Dog',
    RT: 3,
    NoHp: 629123810312,
    role: 'Agen',
  },
  {
    id: '7',
    Name: 'Eminem',
    RT: 4,
    NoHp: 629123810312,
    role: 'Agen',
  },
];

export const dummyDataAdmin: IDataAdmin[] = [
  {
    id: '1',
    name: 'Randy Pangalila',
    email: 'randy@gmail.com',
    role: 'Pengepul',
  },
  {
    id: '2',
    name: 'Jakson Karmila',
    email: 'kkj@gmail.com',
    role: 'Pengepul',
  },
  {
    id: '3',
    name: 'KKunge',
    email: 'KKunge@gmail.com',
    role: 'Pengepul',
  },
  {
    id: '4',
    name: 'Rachel',
    email: 'rachel@gmail.com',
    role: 'Admin',
  },
  {
    id: '5',
    name: 'Zee',
    email: 'zee@gmail.com',
    role: 'Admin',
  },
];

export const EmptyDataUser: IDataUser = {
  id: '',
  Name: '',
  NoHp: '',
  RT: '',
  role: '',
};

export const EmptyDataAdmin: IDataAdmin = {
  id: '',
  name: '',
  email: '',
  role: '',
};

export const ServiceDrawerUser = atom<IDrawerCreate<IDataUser>>({
  show: false,
  type: 'CREATE',
  data: null,
});

export const ServiceDrawerAdmin = atom<IDrawerCreate<IDataAdmin>>({
  show: false,
  type: 'CREATE',
  data: null,
});

export const ServiceActiveTab = atom<IActiveTab>({
  name: 'Masyarakat',
});
