import '../styles.css';
import '../sass/main.scss';

const themeSwitchControl = document.querySelector('.theme-switch__control');
themeSwitchControl.addEventListener('click', onClickChangeTheme);

const bodyTheme = document.querySelector('body');
console.log(bodyTheme.classList);
console.log(bodyTheme.classList.value);

function onClickChangeTheme(event) {
    // console.log(event.target);
    if (bodyTheme.classList.contains('light-theme')) {
        console.log(bodyTheme.classList.contains('light-theme'))
        bodyTheme.classList.remove('light-theme');
        bodyTheme.classList.add('dark-theme');
    };
    
    if (bodyTheme.classList.contains('dark-theme')) {
        bodyTheme.classList.replace('dark-theme', 'light-theme');
    };
    // document.body.style.backgroundColor = 'green';
    // if (body.classList.contains ('.light-theme') {
    //     body.classList.replace('light-theme', 'dark-theme');
    // }
};
console.log(bodyTheme.classList.value);