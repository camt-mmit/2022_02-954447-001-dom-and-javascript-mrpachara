function computeTotal(inputsContainer, resultComponent) {
  const total = [...inputsContainer.querySelectorAll('.cmp-input-container')]
    .map((elem) => elem.querySelector('.cmp-input'))
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

  resultComponent.value = total;
}

function add(inputsContainer, resultComponent, template) {
  const fragment = template.content.cloneNode(true);
  const title = fragment.querySelector('.cmp-input-title');
  const input = fragment.querySelector('input[type="number"]');

  const lastN = inputsContainer.querySelectorAll('.cmp-input-container').length;
  title.innerText = `Number ${lastN + 1}:`;

  inputsContainer.append(fragment);

  input.addEventListener('change', () => {
    computeTotal(inputsContainer, resultComponent);
  });

  computeTotal(inputsContainer, resultComponent);
}

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputsContainer = document.querySelector('.cmp-inputs-container');
  const resultComponent = document.querySelector('.cmp-result');

  document.querySelector('.cmd-add-input').addEventListener('click', () => {
    add(inputsContainer, resultComponent, inputTemplate);
  });

  add(inputsContainer, resultComponent, inputTemplate);
});
