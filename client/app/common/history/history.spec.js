import HistoryModule from './history'
import HistoryController from './history.controller';
import HistoryComponent from './history.component';
import HistoryTemplate from './history.html';

describe('History', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HistoryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HistoryController();
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
      let component = HistoryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HistoryTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HistoryController);
      });
  });
});
