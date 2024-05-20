import './src/css/style.css';
const date = new Date();
const result = date.getFullYear();

document.getElementById('footer').innerHTML = `
&copy; ${result} all the right reserved to Rakib Hasan.
`