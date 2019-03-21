import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import historyComponent from './history.component';

let historyModule = angular.module('history', [
  uiRouter
])

.component('history', historyComponent)

.name;

export default historyModule;
