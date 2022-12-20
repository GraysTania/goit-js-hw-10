import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs.js';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener(
  'input',
  debounce(event => {
    let countryInput = event.target.value.trim();
    refs.list.innerHTML = '';
    refs.info.innerHTML = '';
    if (countryInput === '') {
      return;
    }
    fetchCountries(countryInput);
  }, DEBOUNCE_DELAY)
);
