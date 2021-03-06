import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Local storage mock
var localStorageMock = (function () {
  var store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };

})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

Enzyme.configure({
  adapter: new Adapter(),
});
