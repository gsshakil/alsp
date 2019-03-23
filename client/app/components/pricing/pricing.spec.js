import PricingModule from './pricing'
import PricingController from './pricing.controller';
import PricingComponent from './pricing.component';
import PricingTemplate from './pricing.html';

describe('Pricing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PricingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PricingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
      // component/directive specs
      let component = PricingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PricingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PricingController);
      });
  });
});
