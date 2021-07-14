require('./css/styles.scss')

// Import fonts
import './fonts.css'

// Importando Bootstrap
import './index.css';
import 'bootstrap'

// Import font awesome

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faCode);
dom.watch();

// Import jQuery

import $ from 'jquery';

const body = $('body');

const p = $("<p></p>").text("Inserindo texto").css("color","red");

const h1 = $("<h1></h1>").text("Webpack")

body.append(h1);
body.append(p);
