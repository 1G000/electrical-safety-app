import './loginForm.scss';
import { createHeading, createTest } from '../testPage/testPage';
import { groups, reasons, personalTypes } from '../../data/data';
import { User } from '../interfaces';
import { createInputDate } from '../dateInput/dateInput';
import { createInput } from '../input/input';
import { createSelect } from '../select/select';
import { createBtn } from '../button/button';
import { ButtonTypes } from '../button/button';

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

interface  InputEntry {
  id: string,
  label: string,
  defaultValue: string
}

const inputData: InputEntry[] = [
  { id: 'name-input', label: 'Имя', defaultValue: 'Иван' },
  { id: 'surname-input', label: 'Фамилия', defaultValue: 'Иванов' },
  { id: 'thirdname-input', label: 'Отчество', defaultValue: 'Иванович' },
  { id: 'profession-input', label: 'Должность', defaultValue: 'Электромонтажник по обслуживанию домовых систем' },
  { id: 'departament-input', label: 'Название подразделения', defaultValue: 'Полное название подразделения' },
];

function createInputs (data: InputEntry[]): { [key: string]: HTMLDivElement } {
  const inputs: { [key: string]: HTMLDivElement } = {};
  data.forEach((entry: InputEntry) => {
    inputs[entry.id] = createInput(entry.id, entry.label, entry.defaultValue);
  });
  return inputs;
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
  const group = (<HTMLSelectElement>document.querySelector('#groups-list'))
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
  createHeading();
  createTest();
}


function createDivElement(styleName: string) {
  const div = <HTMLDivElement>document.createElement('div');
  div.classList.add(styleName)
  return div
}

export default function createLoginForm(): void {
  const container = <HTMLDivElement>document.querySelector('.container');
  container.innerHTML = '';
  const formTitle = <HTMLHeadingElement>document.createElement('h1');
  formTitle.innerHTML = '⚡Проверка знаний по электробезопасности⚡';
  const loginForm = <HTMLFormElement>document.createElement('form');
  loginForm.method = 'get';
  loginForm.classList.add('login-form');

  const loginFormContainerTop = createDivElement('login-form-container-top')
  const loginFormContainer = createDivElement('login-form-container')
  const loginFormContainerCenter = createDivElement('login-form-container-center')
  const loginFormLeft = createDivElement('login-form-left')
  const loginFormRight = createDivElement('login-form-right')

  loginFormContainer.append(
    loginFormLeft,
    loginFormRight,
    loginFormContainerCenter,
  );
  const inputs = createInputs(inputData);
  const persSelect = createSelect(personalTypes, 'pers-select', 'Категория персонала' );
  const reasonsSelect = createSelect(reasons, 'reasons-list', "Укажите причину проверки" );
  const groupsSelect = createSelect(groups,'groups-list','Группа' ,);
  const inputDate = createInputDate();

  const currentGroupTitle = document.createElement('h2');
  currentGroupTitle.innerHTML = 'Предыдущая проверка знаний';
  const currentGroupText = <HTMLHeadingElement>document.createElement('p');
  currentGroupText.classList.add('group-text');
  currentGroupText.innerHTML = 'Группа';
  const loginBtn = createBtn('login-btn', 'Начать тест!', ButtonTypes.Submit)
  loginFormContainerTop.append(reasonsSelect)
  container.append(formTitle,loginForm);
  loginForm.append(loginFormContainerTop, loginFormContainer, loginBtn);
  loginFormLeft.append(inputs['surname-input'], inputs['name-input'], inputs['thirdname-input']);
  loginFormRight.append(inputs['departament-input'], inputs['profession-input'], persSelect);
  loginFormContainerCenter.append(currentGroupTitle,inputDate,groupsSelect);
  loginForm.addEventListener('submit', submitHandler);
}
