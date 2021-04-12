import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});
jest.mock('@libs/mapboxgl/mapbox-gl-enhance.js', () => require('./mocks/mapboxgl').mapboxgl);
jest.mock('@libs/iclient-mapboxgl/iclient-mapboxgl.min.js', () => require('./mocks/mapboxgl_iclient'));
jest.mock('@libs/json-sql/jsonsql.js', () => require('./mocks/jsonsql'));

