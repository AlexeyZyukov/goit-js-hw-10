import '../styles.css';
import '../sass/main.scss';

const themeSwitchControl = document.querySelector('.theme-switch__control');
themeSwitchControl.addEventListener('click', onClickChangeTheme);

const bodyTheme = document.querySelector('body');
console.log(bodyTheme.classList);
console.log(bodyTheme.classList.value);

function onClickChangeTheme(event) {
    console.log(event.target);
    document.body.classList.add('.body.dark-theme');
    // document.body.style.backgroundColor = 'green';
    // if (body.classList.contains ('.light-theme') {
    //     body.classList.replace('light-theme', 'dark-theme');
    // }
};