// riferimenti agli "id" nel file .html
let pswrd = document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');
let lowerCase = document.getElementById('lower'); 
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

// Check validation
checkPassword = (data) => {
    // javascript regular expression pattern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // lowerCase
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid')
    }

    // upperCase
    if(upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid')
    }

    // number
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid')
    }

     // special
     if(special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid')
    }

     // length
     if(length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid')
    }
}

// show\hide password
toggleBtn.onclick = () => {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text')
        toggleBtn.classList.add('hide') // aggiunge una classe chiamata "hide"
    } else {
        pswrd.setAttribute('type', 'password')
        toggleBtn.classList.remove('hide') // rimuove una classe chiamata "hide"
    }
}

