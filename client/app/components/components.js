import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Pricing from './pricing/pricing';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Pricing
])

.name;

export default componentModule;
