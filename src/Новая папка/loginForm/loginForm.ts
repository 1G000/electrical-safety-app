import './loginForm.scss';
import { createHeading, createTest } from '../testPage/testPage';

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
  placeholder: string,
  labelText: string,
): HTMLDivElement {
  const inputField = <HTMLDivElement>document.createElement('div');
  inputField.classList.add('input-field');
  const label = <HTMLLabelElement>document.createElement('label');
  label.innerHTML = `${labelText}`;
  label.setAttribute('for', `${name}`);
  inputField.append(label);
  const input = <HTMLInputElement>document.createElement('input');
  input.id = `${name}`;
  input.name = `${name}`;
  input.placeholder = `${placeholder}`;
  input.type = 'text';
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
  loginForm.method = 'get';
  loginForm.classList.add('login-form');
  const formTitle = <HTMLHeadingElement>document.createElement('h2');
  formTitle.innerHTML =
    'Добро пожаловать на проверку знаний по электробезопасности';
  loginForm.append(formTitle);
  const inputFirstName = createInputField(
    'name-input',
    'Иван',
    'Введите Ваше имя',
  );
  const inputSurName = createInputField(
    'surname-input',
    'Иванов',
    'Введите Вашу фамилию',
  );
  const inputThirdName = createInputField(
    'thirdname-input',
    'Иванович',
    'Введите Ваше отчество',
  );
  const inputProfession = createInputField(
    'profession-input',
    'Алектромонтажник',
    'Введите Вашу должность согласно штатному расписанию',
  );
  const loginBtn = <HTMLButtonElement>document.createElement('button');
  loginBtn.textContent = 'Начать!';
  loginBtn.value = 'start!';
  loginBtn.type = 'submit';
  loginBtn.classList.add('login-btn');
  loginForm.addEventListener('submit', submitHandler);
  container.append(loginForm);
  loginForm.append(
    inputFirstName,
    inputSurName,
    inputThirdName,
    inputProfession,
  );
  loginForm.append(loginBtn);
}
