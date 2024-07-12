import { atom } from 'jotai';
import { IDialogDelete } from '../types';

export const ServiceDialog = atom<IDialogDelete>({
  show: false,
  id: '',
});
