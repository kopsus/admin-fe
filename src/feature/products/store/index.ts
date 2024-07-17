import { atom } from 'jotai';
import { IDataProduct } from '../types';
import { IDrawerCreate } from '../../_global/types';

export const dummyProducts: IDataProduct[] = [
  {
    id: '1',
    title: 'Kardus',
    price: 2500,
    image:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihbXnz7Njq6s4wf2Z7zCFRr7t4UL6euz3-Kf3vF-e7u1Cj0BcHu5p_KEony3CyDEShGKUxIKmwsZc23OThQNPlTL3i1aJhKjKg=s2560',
  },
  {
    id: '2',
    title: 'Botol Plastik',
    price: 3500,
    image:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihZjQjextj90bqfnK59SRYYPko_XAO-qj6s1wWJSTaFxAXyyproDTMsjPZQyEe60VaUPqG39dSmYi8g5c91BK-hjxdIxck9pVw=s2560',
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
