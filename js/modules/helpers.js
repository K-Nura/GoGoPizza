export const changeFirstUpperCase = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export const createRadioInput = (className, id, name, value) => {
  const input = document.createElement('input');
  input.classList.add(className);
  input.type = 'radio';
  input.id = id;
  input.name = name;
  input.value = value;
  return input;
}

export const createLabel = (className, forId, labelText) => {
  const label = document.createElement('label');
  label.classList.add(className);
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
}