import { atom } from 'jotai';
import { EducationType } from '../types';
import { IDrawerCreate } from '../../_global/types';

export const dummyEduactions: EducationType[] = [
  {
    id: '1',
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihakLR_jNOikPjvuDJGamr4y2ouuT-PCtrACIGW5HIi24krWXk8T5xPm3kE69AMHjFu-aN8q7N-_C4kpj2scM1xsAMdCXCpUqZ4=s1600-rw-v1',
  },
  {
    id: '2',
    title: 'Why do we use it?',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    image:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihakLR_jNOikPjvuDJGamr4y2ouuT-PCtrACIGW5HIi24krWXk8T5xPm3kE69AMHjFu-aN8q7N-_C4kpj2scM1xsAMdCXCpUqZ4=s1600-rw-v1',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    image:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihbghAY_gJA5_VVtOa4r5zNewG6-kLhhxxLA0rWdnjmeMjBO_9a3jKUElQk-oA9ecrMSLLCJLuviq9nR3dSg8Hb2D42hMZ2uaQ=s1600-rw-v1',
  },
  {
    id: '4',
    title: 'Where can I get some?',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    image:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihbghAY_gJA5_VVtOa4r5zNewG6-kLhhxxLA0rWdnjmeMjBO_9a3jKUElQk-oA9ecrMSLLCJLuviq9nR3dSg8Hb2D42hMZ2uaQ=s1600-rw-v1',
  },
];

export const EmptyDataEducation: EducationType = {
  id: '',
  description: '',
  image: '',
  title: '',
};

export const ServiceDrawer = atom<IDrawerCreate<EducationType>>({
  show: false,
  type: 'CREATE',
  data: null,
});
