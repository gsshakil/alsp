import NewsletterModule from './newsletter'
import NewsletterController from './newsletter.controller';
import NewsletterComponent from './newsletter.component';
import NewsletterTemplate from './newsletter.html';

describe('Newsletter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewsletterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewsletterController();
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
      let component = NewsletterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewsletterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewsletterController);
      });
  });
});
