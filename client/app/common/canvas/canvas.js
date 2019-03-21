import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import canvasComponent from './canvas.component';

let canvasModule = angular.module('canvas', [
  uiRouter
])

.component('canvas', canvasComponent)

.name;

export default canvasModule;
