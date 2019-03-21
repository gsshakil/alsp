import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import toolbarComponent from './toolbar.component';

let toolbarModule = angular.module('toolbar', [
  uiRouter
])

.component('toolbar', toolbarComponent)

.name;

export default toolbarModule;
