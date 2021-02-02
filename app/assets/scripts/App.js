import '../styles/styles.css';
import chartjs from './modules/chartjs';
import post from './modules/post';

chartjs();
post();

if (module.hot) {
  module.hot.accept()
};