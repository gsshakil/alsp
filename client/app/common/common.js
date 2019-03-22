import angular from 'angular';
import Navbar from './navbar/navbar';
import Toolbar from './toolbar/toolbar';
import Kanvas from './kanvas/kanvas';
import History from './history/history';
import Footer from './footer/footer';
import Newsletter from './newsletter/newsletter'

let commonModule = angular.module('app.common', [
  Navbar,
  Toolbar,
  Kanvas,
  History,
  Newsletter,
  Footer
])

.name;

export default commonModule;
