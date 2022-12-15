function add(inputsContainer, resultComponent) {
  const container = document.createElement('div');
  container.classList.add('cmp-input-container');

  const label = document.createElement('label');
  container.append(label);

  const title = document.createElement('b');
  label.append(title);

  const input = document.createElement('input');
  input.type = 'number';
  input.defaultValue = 0;
  input.required = true;
  label.append(input);

  const lastN = inputsContainer.querySelectorAll('.cmp-input-container').length;
  title.innerText = `Number ${lastN + 1}:`;

  inputsContainer.append(container);

  input.addEventListener('change', () => {
    const total = [
      ...inputsContainer.querySelectorAll('input[type="number"]'),
    ].reduce((carry, elem) => carry + elem.valueAsNumber, 0);

    resultComponent.value = total;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const inputsContainer = document.querySelector('.cmp-inputs-container');
  const resultComponent = document.querySelector('.cmp-result');

  document.querySelector('.cmd-add-input').addEventListener('click', () => {
    add(inputsContainer, resultComponent);
  });

  add(inputsContainer, resultComponent);
});
