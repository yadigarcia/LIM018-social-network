// Este es el punto de entrada de tu aplicacion
import { Home } from './component/Home.js';
import { Register } from './component/Register.js';

const rootDiv = document.getElementById('root');

const Routes = {
  './': Home,
  './Register': Register,
};

rootDiv.appendChild = Routes[window.location.pathname];
const pathname1 = window.location.pathname;

// const changeView = () => {
//   switch (Route) {
//     case './': return rootDiv.appendChild(Routes.Home());
//     case './ Register': return rootDiv.appendChild(Routes.Register());
//     default:
//       break;
//   }

//   return changeView;
// };
