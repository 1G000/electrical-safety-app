import './loginForm.scss';
import { createHeading, createTest } from '../testPage/testPage';

const groups: [string, string, string] = ['II', 'III', 'IV'];
const reasons: [string, string, string] = [
  'очередная',
  'первичная',
  'внеочередная',
];

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

function createInputDate(): HTMLDivElement {
  const dateField = <HTMLDivElement>document.createElement('div');
  dateField.classList.add('input-field');
  const previousDate = document.createElement('input');
  previousDate.type = 'date';
  previousDate.id = 'previous-date';
  previousDate.name = `dateForm`;
  const previousDateTitle = document.createElement('label');
  previousDateTitle.classList.add('login-form-label');
  previousDateTitle.innerHTML = `Дата предыдущей проверки знаний`;
  previousDateTitle.setAttribute('for', `dateForm`);
  dateField.append(previousDateTitle, previousDate);
  return dateField;
}

interface User {
  name: string;
  surname: string;
  thirdname: string;
  profession: string;
}

export const currentUser: User = {
  name: '',
  surname: '',
  thirdname: '',
  profession: '',
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
  if (name) {
    currentUser.name = name;
    currentUser.surname = surname;
    currentUser.thirdname = thirdname;
    currentUser.profession = profession;
  }
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
  const loginFormContainerBottom = <HTMLDivElement>(
    document.createElement('div')
  );
  loginFormContainerBottom.classList.add('login-form-container-bottom');
  const loginFormLeft = <HTMLDivElement>document.createElement('div');
  loginFormLeft.classList.add('login-form-column');
  const loginFormRight = <HTMLDivElement>document.createElement('div');
  loginFormRight.classList.add('login-form-right');
  loginFormRight.classList.add('login-form-column');
  loginFormContainer.append(loginFormLeft, loginFormRight);
  loginForm.method = 'get';
  loginForm.classList.add('login-form');

  const formTitle = <HTMLHeadingElement>document.createElement('h2');
  const reasonTitle = <HTMLHeadingElement>document.createElement('h3');
  reasonTitle.innerHTML = 'Укажите причину проверки знаний';
  formTitle.innerHTML = '⚡Проверка знаний по электробезопасности⚡';
  container.append(formTitle);
  const inputFirstName = createInputField(
    'name-input',
    'Введите Ваше имя',
    'Иван',
  );
  const inputSurName = createInputField(
    'surname-input',
    'Введите Вашу фамилию',
    'Иванов',
  );
  const inputThirdName = createInputField(
    'thirdname-input',
    'Введите Ваше отчество',
    'Иванович',
  );
  const inputProfession = createInputField(
    'profession-input',
    'Введите Вашу должность',
    'Электромонтажник по обслуживанию домовых систем',
  );
  const inputDepartment = createInputField(
    'departament-input',
    'Введите название подразделения',
    'Полное название подразделения',
  );
  const inputDate = createInputDate();
  const loginBtn = <HTMLButtonElement>document.createElement('button');
  loginBtn.textContent = 'Начать тест!';
  loginBtn.value = 'start!';
  loginBtn.type = 'submit';
  loginBtn.classList.add('login-btn');
  loginForm.addEventListener('submit', submitHandler);
  container.append(loginForm);
  loginForm.append(
    loginFormContainerTop,
    loginFormContainer,
    loginFormContainerBottom,
  );
  loginFormContainerTop.append(reasonTitle);
  createSelect('reasons-list', 'login-form-container-top', reasons);
  loginFormLeft.append(inputSurName, inputFirstName, inputThirdName);
  loginFormRight.append(inputDepartment, inputProfession, inputDate);

  const currentGroupText = <HTMLHeadingElement>document.createElement('p');
  currentGroupText.classList.add('group-text');
  currentGroupText.innerHTML = 'Действующая группа по электробезопасности';
  const needGroupText = <HTMLHeadingElement>document.createElement('p');
  needGroupText.classList.add('group-text');
  needGroupText.innerHTML = 'Требуемая группа по электробезопасности';
  loginFormContainerBottom.append(currentGroupText);
  createSelect('currentGroup', 'login-form-container-bottom', groups);
  loginFormContainerBottom.append(needGroupText);
  createSelect('assignedGroup', 'login-form-container-bottom', groups);
  loginForm.append(loginBtn);
}
