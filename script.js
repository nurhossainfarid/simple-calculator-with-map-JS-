let display = document.getElementById('display');
let clickButton = Array.from(document.getElementsByClassName('button'));
clickButton.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.value = '';
                break;
            case 'Back':
                if (display.value) {
                    display.value = display.value.slice(0, -1);
                }
                break;
            case '=':
                display.value = eval(display.value);
                break;
            default:
                display.value += e.target.innerText;
        }
    })
})