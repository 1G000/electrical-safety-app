export function createInputDate(): HTMLDivElement {
    const dateField = <HTMLDivElement>document.createElement('div');
    dateField.classList.add('input-field');
    const previousDate = document.createElement('input');
    previousDate.type = 'date';
    previousDate.id = 'previous-date';
    previousDate.name = `dateForm`;
    const previousDateTitle = document.createElement('label');
    previousDateTitle.classList.add('login-form-label');
    previousDateTitle.innerHTML = `Дата`;
    previousDateTitle.setAttribute('for', `dateForm`);
    dateField.append(previousDateTitle, previousDate);
    return dateField;
  }