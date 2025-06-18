let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen'); // corrigido aqui

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator == null) {
                return;
            }
            flushOperation(parseFloat(buffer));
            previousOperator = null;
            buffer = `${runningTotal}`;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseFloat(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    switch (previousOperator) {
        case '+':
            runningTotal += intBuffer;
            break;
        case '−':
            runningTotal -= intBuffer;
            break;
        case '×':
            runningTotal *= intBuffer;
            break;
        case '÷':
            runningTotal /= intBuffer;
            break;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event) {
        const value = event.target.innerText;
        if (!event.target.classList.contains('calc-button')) return;
        buttonClick(value);
    });
}

init();


// Animação ao carregar
gsap.from(".wrapper", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Animação dos botões ao clicar
document.querySelectorAll('.calc-button').forEach(button => {
    button.addEventListener('click', () => {
        gsap.fromTo(button, 
            { scale: 1 },
            { scale: 1.1, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.inOut" }
        );
    });
});
