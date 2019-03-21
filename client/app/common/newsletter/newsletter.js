import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import newsletterComponent from './newsletter.component';

let newsletterModule = angular.module('newsletter', [
  uiRouter
])

.component('newsletter', newsletterComponent)

.name;

export default newsletterModule;
