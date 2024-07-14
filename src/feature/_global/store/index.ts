import { atom } from 'jotai';
import { IDialogDelete, IJenisSampah } from '../types';

export const ServiceDialog = atom<IDialogDelete>({
  show: false,
  id: '',
});

export const dummyDataJenisSampah: IJenisSampah[] = [
  {
    id: '1',
    name: 'Botol Kaca',
  },
  {
    id: '2',
    name: 'Botol PLastik',
  },
  {
    id: '3',
    name: 'Kardus',
  },
];
