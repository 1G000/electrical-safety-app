export function createInput(
    name: string,
    labelText: string,
    placeholder: string,
  ): HTMLDivElement {
    const inputField = <HTMLDivElement>document.createElement('div');
    inputField.classList.add('input-field');
    const label = <HTMLLabelElement>document.createElement('label');
    label.classList.add('login-form-label');
    label.innerHTML = `${labelText}`;
    label.setAttribute('for', `${name}`);
    inputField.append(label);
    const input = <HTMLInputElement>document.createElement('input');
    input.type = 'text';
    input.id = `${name}`;
    input.name = `${name}`;
    input.placeholder = `${placeholder}`;
    input.setAttribute('autocomplete', 'off');
    inputField.append(input);
    return inputField;
  }