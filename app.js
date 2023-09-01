const num = document.querySelector('#number')
const submit = document.querySelector('#submit')
const tables = document.querySelector('#table');
const error = document.querySelector('#error');


function table(e) {
    e.preventDefault();

    if (num.value > 0) {
        tables.innerHTML = '';
        let start = +prompt("From which no you want to strt a table?")
        let end = +prompt("At what no you want to end a table?")

        for (let i = start; i <= end; i++) {
            tables.innerHTML += (`${num.value} x ${i} = ${num.value * i} <br />`);
        }
    }

    else {
        // alert('Invalid No');
        error.innerHTML += ("Inavlid No");
    }
}












