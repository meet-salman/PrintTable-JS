const num = document.querySelector('#number')
const submit = document.querySelector('#submit')
const tables = document.querySelector('#table');
const error = document.querySelector('#error');


function table() {

    if (num.value > 0) {
        for (let i = 0; i <= 10; i++) {
            tables.innerHTML += (`${num.value} x ${i} = ${num.value * i} <br />`);
        }
    }

    else {
        // alert('Invalid No');
        error.innerHTML += ("Inavlid No");
    }
}



