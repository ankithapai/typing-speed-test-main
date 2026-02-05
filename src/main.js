
const passagesJSON = await fetch('./data.json')
  .then(response => response.json())


let diifficultyOption = 'easy';

const passageElement = document.querySelector('.passageContainer');
let passageContent = passagesJSON[diifficultyOption][Math.floor(Math.random() * passagesJSON[diifficultyOption].length)];
passageElement.innerHTML = passageContent.text;


const diifficultyOptions = document.querySelector('.difficulty .options');
diifficultyOptions.addEventListener('click', (e) => {

    if (e.target.classList.contains('option')) {
        e.target.classList.add('selected');

        diifficultyOption = e.target.textContent.toLowerCase();
        passageContent = passagesJSON[diifficultyOption][Math.floor(Math.random() * passagesJSON[diifficultyOption].length)];
        passageElement.innerHTML = passageContent.text;

        const allBtns = diifficultyOptions.querySelectorAll('.option');
        allBtns.forEach(btn => {
            if (btn !== e.target) {
                btn.classList.remove('selected');
            }   
        });
    }

    console.log(diifficultyOption);
})


