import fridgeImg from '@assets/img/fridge.png';
import foodMixerImg from '@assets/img/food-mixer.png';
import whiskyImg from '@assets/img/whisky.png';

const OFFERS = [
  {
    img: fridgeImg,
    imgAlt: 'Refrigerador',
    buttonText: 'Mais Detalhes',
    link: '#',
  },
  {
    img: foodMixerImg,
    imgAlt: 'Batedeira',
    buttonText: 'Comprar em 12x',
    action: () => {
      /* Add to cart */
    },
  },
  {
    img: whiskyImg,
    imgAlt: 'Whisky',
    buttonText: 'Adicionar a sacola',
    action: () => {
      /* Add to cart */
    },
  },
];

export default OFFERS;
