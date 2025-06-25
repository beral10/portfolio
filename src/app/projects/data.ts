import comicsPage from "../../../public/projectPhotos/comicsPage.png";
import ecommerce from "../../../public/projectPhotos/ecommerce.png";
import event from "../../../public/projectPhotos/leadershipEvent.png";
import tmdb from "../../../public/projectPhotos/tmdb.png";
import todoList from "../../../public/projectPhotos/todoList.png";
import vrPage from "../../../public/projectPhotos/vrPage.png";
import { Project } from "../../types/types";

export const myProjects: Project[] = [
  {
    id: 1,
    title: 'Movie App TMDB | Next.js',
    image: tmdb,
    description: 'Listado de películas populares, estrenos y mejor valoradas.',
    techStack: ['Next.js', 'TMDB API', 'Tailwindcss', 'useContext', 'Responsive Design'],
    link: 'https://movies-tmdb-kappa.vercel.app/',
    github: 'https://github.com/beral10/search-movie-tmdb.git',
  },
  {
    id: 2,
    title: 'E-commerce App | React',
    image: ecommerce,
    description: 'Exploración de productos, vista de detalles y simulación de compra.',
    techStack: ['React', 'JavaScript', 'Tailwindcss', 'useReducer', 'Responsive Design'],
    link: 'https://e-commerce-lake-beta.vercel.app/',
    github: 'https://github.com/beral10/e-commerce.git',
  },
  {
    id: 3,
    title: 'Buscador de Héroes | React',
    image: comicsPage,
    description: 'Búsqueda y visualización de detalles de personajes.',
    techStack: ['React', 'JavaScript', 'Tailwindcss', 'Responsive Design'],
    link: 'https://buscador-heroes.vercel.app/',
    github: 'https://github.com/beral10/buscador_heroes.git',
  },
  {
    id: 4,
    title: 'Todo List',
    image: todoList,
    description: 'Proyecto básico para prácticas con manejo de estado y persistencia local.',
    techStack: ['React', 'JavaScript', 'Tailwindcss', 'localStorage', 'Responsive Design'],
    link: 'https://todo-app-sigma-nine-31.vercel.app/',
    github: 'https://github.com/beral10/TODO.git',
  },
  {
    id: 5,
    title: 'Landing Page de Realidad Virtual (VR)',
    image: vrPage,
    description: 'Maquetación semántica, buenas prácticas en estilos y organización del CSS.',
    techStack: ['HTML', 'CSS', 'SCSS', 'Responsive Design'],
    link: 'https://pagina-vr-interactiva.vercel.app/',
    github: 'https://github.com/beral10/p-gina-VR-interactiva.git',
  },
  {
    id: 6,
    title: 'Landing Page de Event',
    image: event,
    description: ' Landing page promocional para evento/taller de liderazgo, con diseño adaptable a múltiples dispositivos.',
    techStack: ['HTML5', 'Sass', 'CSS', 'Responsive Design'],
    link: 'https://vanilla-sass-leadership-event-prototype.vercel.app/',
    github: 'https://github.com/beral10/vanilla-sass-leadership-event-prototype.git',
  },
];