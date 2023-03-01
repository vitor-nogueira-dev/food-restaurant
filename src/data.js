// icones serviços
import list from './assets/list.png';
import chef from './assets/chef.png';
import campainha from './assets/campainha.png';
import horas from './assets/horas.png';

// hamburgueres
import ham01 from './assets/ham01.png';
import ham02 from './assets/ham02.png';
import ham03 from './assets/ham03.png';
import ham04 from './assets/ham04.png';
import ham05 from './assets/ham05.png';
import ham06 from './assets/ham06.png';

// categorias
import bolo from './assets/bolo.png';
import esfirra from './assets/esfirra.png';
import sushi from './assets/sushi.png';
import bebidas from './assets/bebidas.png';
import vegan from './assets/vegan.png';
import hamburguer from './assets/hamburguer.png';

// funcionários
import arthur from './assets/arthur.png';
import helena from './assets/helena.png';
import heloisa from './assets/heloisa.png';
import pedro from './assets/pedro.png';

// feedbacks
import afonso from './assets/afonso.png';
import karol from './assets/karol.png';
import antoni from './assets/antoni.png';

const services = [
  {
    icon: list,
    name: 'Pedidos Online',
  },
  {
    icon: campainha,
    name: 'Reservas',
  },
  {
    icon: chef,
    name: 'Super chefs',
  },
  {
    icon: horas,
    name: 'Serviços',
  },
];

const hamburgueres = [
  {
    image: ham01,
  },
  {
    image: ham02,
    isSelected: true,
  },
  {
    image: ham03,
  },
  {
    image: ham04,
  },
  {
    image: ham05,
  },
  {
    image: ham06,
  },
];

const optionsMenu = [
  {
    image: sushi,
    name: 'Sushi',
  },
  {
    image: bolo,
    name: 'Bolos/Doces',
  },
  {
    image: esfirra,
    name: 'Esfirras',
  },
  {
    image: bebidas,
    name: 'Bebidas',
  },
  {
    image: hamburguer,
    name: 'Hambúrgueres',
    isSelected: true,
  },
  {
    image: vegan,
    name: 'Veganos',
  },
];

const employess = [
  {
    name: 'Arthur',
    image: arthur,
    cargo: 'Auxiliar de cozinha',
  },
  {
    name: 'Helena',
    image: helena,
    cargo: 'Chef de cozinha',
  },
  {
    name: 'Heloísa',
    image: heloisa,
    cargo: 'Senior Chef',
  },
  {
    name: 'Pedro',
    image: pedro,
    cargo: 'Sushiman',
  },
];
const feedbacks = [
  {
    name: 'Afonso',
    profession: 'Administrador',
    image: afonso,
    feedback:
      '"Não posso deixar de elogiar. A comida era incrível e o serviço foi impecável. Definitivamente voltarei novamente."',
  },
  {
    name: 'Karol',
    profession: 'Designer',
    image: karol,
    feedback:
      '"Experiência gastronômica incrível no restaurante. Os pratos eram deliciosos e o atendimento foi excepcional."',
  },
  {
    name: 'Antoni',
    profession: 'Advogado',
    image: antoni,
    feedback:
      '"Eu amei o ambiente acolhedor e a comida incrível no restaurante. Altamente recomendado!"',
  },
];
export { services, hamburgueres, optionsMenu, employess, feedbacks };
