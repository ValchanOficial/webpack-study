import './css/styles.css';

class Title {
    create(title) {
        const h1 = document.createElement('h1');
        h1.innerHTML = title;
        h1.classList.add('title');
        document.body.appendChild(h1);
    }
}

const title = new Title(); 
title.create('Webpack')

// DefinePlugin
console.log(PRODUCTION);
console.log(PORT);
console.log(TEXT_EXAMPLE)
console.log(VERSION);

// DotenvPlugin
console.log(process.env.MY_SECRET_ENV);