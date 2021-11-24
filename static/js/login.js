//!Login page Ajax

console.log('Login Page')
const url = window.location.href
const netice = url.replace('login/','errorlogin/')
console.log(netice)

const loginForm = document.getElementById('loginForm')
const nameData = document.getElementById('adiniz')
const passwordData = document.getElementById('sifreniz')
const xetaGosterme = document.getElementById('xetaGosterme')

setTimeout(function() {
    xetaGosterme.classList.add('d-none')
},2000)

