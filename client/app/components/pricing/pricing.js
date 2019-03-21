import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import pricingComponent from './pricing.component';

let pricingModule = angular.module('pricing', [
  uiRouter
])

.component('pricing', pricingComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('pricing', {
      url: '/pricing',
      component: 'pricing'
    });
})


.name;

export default pricingModule;
