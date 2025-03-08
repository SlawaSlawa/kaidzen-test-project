const PERCENT = 0.12

const resultEl = document.querySelector('.form__total')
const inputMoney = document.querySelector('.money')
const inputYears = document.querySelector('.years')

function getResult() {
    const inputMoneyValue = +inputMoney.value || 0
    const inputYearsValue = +inputYears.value || 0

    return inputMoneyValue + inputMoneyValue * PERCENT * inputYearsValue
}

function renderResult() {
    resultEl.textContent = getResult()
}

inputMoney.addEventListener('input', renderResult)
inputYears.addEventListener('input', renderResult)

renderResult()
