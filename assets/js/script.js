const heroName = document.querySelector('#name');
const heroXP = document.querySelector('#xp');
const result = document.querySelector('#result');
const exibe = document.querySelector('#exibe');
const reset = document.querySelector('#reset');
const errorMessage = document.querySelector('#message');

function handleExibe() {
    errorMessage.style.display = 'none';

    let name = heroName.value.trim();
    let xp = parseInt(heroXP.value, 10);

    if (name === '' || isNaN(xp) || xp <= 0) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
        heroName.value = '';
        heroXP.value = '';
        return;
    }

    let nivel;
    if (xp <= 1000) {
        nivel = 'Ferro';
    } else if (xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp <= 5000) {
        nivel = 'Prata';
    } else if (xp <= 7000) {
        nivel = 'Ouro';
    } else if (xp <= 8000) {
        nivel = 'Platina';
    } else if (xp <= 9000) {
        nivel = 'Ascendente';
    } else if (xp <= 10000) {
        nivel = 'Imortal';
    } else {
        nivel = 'Radiante';
    }

    result.textContent = `O herói de nome ${name} está no nível de ${nivel}.`;
}

function handleReset() {
    heroName.value = '';
    heroXP.value = '';
    result.textContent = '';
    errorMessage.style.display = 'none';
}

exibe.addEventListener('click', handleExibe);
reset.addEventListener('click', handleReset);