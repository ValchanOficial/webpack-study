import './css/styles.scss';

import ImageWebpack from './img/webpack.png';
import ImageWebpackSvg from './img/webpack.svg';
import ImageWebpackGif from './img/webpack.gif';

import templateFile from './templates/warning.html';

import jsonFile from './files/descricao.json';

import textFile from './files/frase.txt';

class Title {
    create(title) {
        const h1 = document.createElement('h1');
        h1.innerText = title;
        h1.classList.add('main-title');
        document.querySelector('body').appendChild(h1);
    }
}

class Image {
    insertImage() {
        const img = document.createElement('img');
        img.src = ImageWebpack;
        img.width = 200;
        document.querySelector('body').appendChild(img);

        const imgSvg = document.createElement('img');
        imgSvg.src = ImageWebpackSvg;
        imgSvg.width = 200;
        document.querySelector('body').appendChild(imgSvg);

        const imgGif = document.createElement('img');
        imgGif.src = ImageWebpackGif;
        imgGif.width = 200;
        document.querySelector('body').appendChild(imgGif);
    }
}

const title = new Title()
title.create('Webpack')

const img = new Image()
img.insertImage()

// Babel Spread
const obj = {a:1, b:2, c:3, d:4};
let {a,b, ...test} = obj;
console.log(a,b,test);

// Import HTML
class Template {
    insertHTML() {
        const body = document.querySelector('body');
        body.innerHTML += templateFile;
    }
}

const template = new Template()
template.insertHTML()

console.log(jsonFile)

// Import .txt file
console.log(textFile.toUpperCase())

