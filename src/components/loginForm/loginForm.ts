import './loginForm.scss';
import { createHeading, createTest } from '../testPage/testPage';
import { groups, reasons, personalTypes } from '../../data/data';
import { User } from '../interfaces';

function createSelect(id: string, area: string, arr: string[]) {
  const cont = document.querySelector('.' + area);
  if (cont) {
    const groupChangeSelect = document.createElement('select');
    groupChangeSelect.id = id;
    arr.forEach((gr) => {
      const group = document.createElement('option');
      group.innerHTML = gr;
      group.value = gr;
      groupChangeSelect.append(group);
    });
    cont.append(groupChangeSelect);
  }
}

function createPersSelect(arr: string[]): HTMLDivElement {
  const persField = <HTMLDivElement>document.createElement('div');
  persField.classList.add('input-field');
  const groupChangeSelect = document.createElement('select');
  groupChangeSelect.id = 'pers-select';
  arr.forEach((gr) => {
    const group = document.createElement('option');
    group.innerHTML = gr;
    group.value = gr;
    groupChangeSelect.append(group);
  });
  const persTitle = document.createElement('label');
  persTitle.classList.add('login-form-label');
  persTitle.innerHTML = `Категория персонала`;
  persTitle.setAttribute('for', `groupChangeSelect`);
  persField.append(persTitle, groupChangeSelect);
  return persField;
}

function createInputDate(): HTMLDivElement {
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

export const currentUser: User = {
  reason: '',
  name: '',
  surname: '',
  thirdname: '',
  profession: '',
  personalType: '',
  group: '',
  previousDate: '',
  departament: '',
};

function createInputField(
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

function submitHandler(event: Event): void {
  event.preventDefault();
  const name = (<HTMLInputElement>document.querySelector('#name-input')).value;
  const surname = (<HTMLInputElement>document.querySelector('#surname-input'))
    .value;
  const thirdname = (<HTMLInputElement>(
    document.querySelector('#thirdname-input')
  )).value;
  const profession = (<HTMLInputElement>(
    document.querySelector('#profession-input')
  )).value;
  const personalType = (<HTMLSelectElement>(
    document.querySelector('#pers-select')
  )).value;
  const group = (<HTMLSelectElement>document.querySelector('#currentGroup'))
    .value;
  const previousDate = (<HTMLInputElement>(
    document.querySelector('#previous-date')
  )).value;
  const reason = (<HTMLSelectElement>document.querySelector('#reasons-list'))
    .value;
  const departament = (<HTMLInputElement>(
    document.querySelector('#departament-input')
  )).value;
  currentUser.reason = reason;
  currentUser.name = name;
  currentUser.surname = surname;
  currentUser.thirdname = thirdname;
  currentUser.profession = profession;
  currentUser.personalType = personalType;
  currentUser.group = group;
  currentUser.previousDate = previousDate.split('-').reverse().join('.');
  currentUser.departament = departament;
  console.log(currentUser);
  createHeading();
  createTest();
}

export default function createLoginForm(): void {
  const container = <HTMLDivElement>document.querySelector('.container');
  container.innerHTML = '';
  const loginForm = <HTMLFormElement>document.createElement('form');
  const loginFormContainerTop = <HTMLDivElement>document.createElement('div');
  loginFormContainerTop.classList.add('login-form-container-top');
  const loginFormContainer = <HTMLDivElement>document.createElement('div');
  loginFormContainer.classList.add('login-form-container');
  const loginFormContainerCenter = <HTMLDivElement>(
    document.createElement('div')
  );
  loginFormContainerCenter.classList.add('login-form-container-center');
  const loginFormLeft = <HTMLDivElement>document.createElement('div');
  loginFormLeft.classList.add('login-form-left');
  const loginFormRight = <HTMLDivElement>document.createElement('div');
  loginFormRight.classList.add('login-form-right');
  loginFormContainer.append(
    loginFormLeft,
    loginFormRight,
    loginFormContainerCenter,
  );
  loginForm.method = 'get';
  loginForm.classList.add('login-form');

  const formTitle = <HTMLHeadingElement>document.createElement('h1');
  const reasonTitle = <HTMLHeadingElement>document.createElement('p');
  reasonTitle.classList.add('login-form-label');
  reasonTitle.innerHTML = 'Укажите причину проверки знаний';
  formTitle.innerHTML = '⚡Проверка знаний по электробезопасности⚡';
  container.append(formTitle);
  const inputFirstName = createInputField('name-input', 'Имя', 'Иван');
  const inputSurName = createInputField('surname-input', 'Фамилия', 'Иванов');
  const inputThirdName = createInputField(
    'thirdname-input',
    'Отчество',
    'Иванович',
  );
  const inputProfession = createInputField(
    'profession-input',
    'Должность',
    'Электромонтажник по обслуживанию домовых систем',
  );
  const inputDepartment = createInputField(
    'departament-input',
    'Название подразделения',
    'Полное название подразделения',
  );
  const persSelect = createPersSelect(personalTypes);

  const inputDate = createInputDate();
  const loginBtn = <HTMLButtonElement>document.createElement('button');
  loginBtn.textContent = 'Начать тест!';
  loginBtn.value = 'start!';
  loginBtn.type = 'submit';
  loginBtn.classList.add('login-btn');
  loginForm.addEventListener('submit', submitHandler);
  container.append(loginForm);
  loginForm.append(loginFormContainerTop, loginFormContainer);
  loginFormContainerTop.append(reasonTitle);
  createSelect('reasons-list', 'login-form-container-top', reasons);
  loginFormLeft.append(inputSurName, inputFirstName, inputThirdName);
  loginFormRight.append(inputDepartment, inputProfession, persSelect);

  const currentGroupTitle = document.createElement('h2');
  currentGroupTitle.innerHTML = 'Предыдущая проверка знаний';
  const currentGroupText = <HTMLHeadingElement>document.createElement('p');
  currentGroupText.classList.add('group-text');
  loginFormContainerCenter.append(currentGroupTitle);
  currentGroupText.innerHTML = 'Группа';
  // const needGroupText = <HTMLHeadingElement>document.createElement('p');
  // needGroupText.classList.add('group-text');
  // needGroupText.innerHTML = 'Требуемая группа по электробезопасности';
  loginFormContainerCenter.append(inputDate);
  loginFormContainerCenter.append(currentGroupText);
  createSelect('currentGroup', 'login-form-container-center', groups);
  // loginFormContainerCenter.append(needGroupText,inputDate);
  // createSelect('assignedGroup', 'login-form-container-center', groups);

  loginForm.append(loginBtn);
}
