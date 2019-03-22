import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import kanvasComponent from './kanvas.component';

let kanvasModule = angular.module('kanvas', [
  uiRouter
])

.component('kanvas', kanvasComponent)

.name;

export default kanvasModule;
