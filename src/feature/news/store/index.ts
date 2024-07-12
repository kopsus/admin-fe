import { atom } from 'jotai';
import { ITableNew } from '../types';
import { IDrawerCreate } from '../../_global/types';

export const dummyNews: ITableNew[] = [
  {
    id: '1',
    title:
      'Indonesia Tatap Piala AFF U19 2024, Toni Firmansyah Ingin Juara di Rumah',
    description:
      'Pemain muda Persebaya, Toni Firmansyah, berambisi merasakan gelar juara Piala AFF U19 2024 bersama timnas U19 Indonesia di kota kelahiran, Surabaya. Turnamen Piala AFF U19 2024 akan dimulai pada 17 Juli 2024 mendatang di Stadion Gelora Bung Tomo (GBT), Surabaya, Jawa Timur. Bagi, Toni Firmansyah, bermain di Surabaya ibarat bermain di rumah sendiri. Karena, Stadion GBT yang berkapasitas 40 ribu penonton, merupakan kandang timnya, Persebaya. Karena itu, Toni Firmansyah semakin percaya diri',
    createdAt: '12 juli 2024',
    image: '',
  },
  {
    id: '2',
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    createdAt: '30 juli 2024',
    image: '',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    createdAt: '1 juli 2024',
    image: '',
  },
  {
    id: '4',
    title: 'Why do we use it?',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    createdAt: '11 juli 2024',
    image: '',
  },
];

export const EmptyDataNews: ITableNew = {
  id: '',
  title: '',
  description: '',
  createdAt: '',
  image: '',
};

export const ServiceDrawer = atom<IDrawerCreate<ITableNew>>({
  show: false,
  type: 'CREATE',
  data: EmptyDataNews,
});
