import { atom } from 'jotai';
import { IDataProduct } from '../types';
import { IDrawerCreate } from '../../_global/types';

export const dummyProducts: IDataProduct[] = [
  {
    id: '1',
    title: 'Kardus',
    price: 2500,
    image: '',
  },
  {
    id: '2',
    title: 'Plastik',
    price: 3500,
    image: '',
  },
  {
    id: '3',
    title: 'Logam',
    price: 1000,
    image: '',
  },
  {
    id: '4',
    title: 'Kaca',
    price: 1500,
    image: '',
  },
];

export const EmptyDataProduct: IDataProduct = {
  id: '',
  title: '',
  price: '',
  image: '',
};

export const ServiceDrawer = atom<IDrawerCreate<IDataProduct>>({
  show: false,
  type: 'CREATE',
  data: null,
});
