import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from "jquery"; // Importa o jQuery corretamente
import moment from "moment";
import "moment/locale/pt-br"; // Importa o locale para português do Brasil

window.$ = $;

moment.locale("pt-br"); // Define o locale
window.moment = moment; // Define a variável global moment

