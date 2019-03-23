import KanvasModule from './kanvas'
import KanvasController from './kanvas.controller';
import KanvasComponent from './kanvas.component';
import KanvasTemplate from './kanvas.html';

describe('Kanvas', () => {
  let $rootScope, makeController;

  beforeEach(window.module(KanvasModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new KanvasController();
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
      let component = KanvasComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(KanvasTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(KanvasController);
      });
  });
});
