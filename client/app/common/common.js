import angular from 'angular';
import Navbar from './navbar/navbar';
import Toolbar from './toolbar/toolbar';
import Canvas from './canvas/canvas';
import History from './history/history';
import Footer from './footer/footer';
import Newsletter from './newsletter/newsletter'

let commonModule = angular.module('app.common', [
  Navbar,
  Toolbar,
  Canvas,
  History,
  Newsletter,
  Footer
])

.name;

export default commonModule;
