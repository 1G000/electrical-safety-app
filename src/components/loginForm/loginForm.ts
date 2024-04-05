import './loginForm.scss';
import { createHeading, createTest } from '../testPage/testPage';
import { groups, reasons, personalTypes } from '../../data/data';
import { employeesBase } from '../../data/employees';
import { User } from '../interfaces';
import { createSelect } from '../select/select';
import { createBtn } from '../button/button';
import { ButtonTypes } from '../button/button';

const departaments = employeesBase.map((el) => el.departament);
const employeesNames = employeesBase.map((el) =>
  el.employees.map((e) => e.name),
);
console.log(employeesNames);
// const jobTitles = employeesBase
//   .filter((element) => element.departament === 'РСУ')
//   .map((el) => el.employees.map((e) => e.jobTitle));

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

export default function createLoginForm(): void {
  const container = <HTMLDivElement>document.querySelector('.container');
  container.innerHTML = '';
  const formTitle = <HTMLHeadingElement>document.createElement('h1');
  formTitle.innerHTML = '⚡Проверка знаний по электробезопасности⚡';
  const loginForm = <HTMLFormElement>document.createElement('form');
  loginForm.method = 'get';
  loginForm.classList.add('login-form');

  const departament = createSelect(
    departaments,
    'departaments-select',
    'Подразделение',
  );

  function fillSelect(value) {
    const employeesNames = employeesBase
      .filter((element) => element.departament === value)
      .map((el) => el.employees.map((e) => e.name));
    createSelect(employeesNames, '', '');
  }

  function onSelectChange(event: Event) {
    const target = <HTMLSelectElement>event.target;
    const selectedValue = target.value;
    console.log(selectedValue);
    fillSelect(selectedValue);
  }

  departament.addEventListener('change', (event) => onSelectChange(event));

  const employeeName = createSelect(employeesNames[0], 'fio-select', 'ФИО');

  const persSelect = createSelect(
    personalTypes,
    'pers-select',
    'Категория персонала',
  );
  const reasonsSelect = createSelect(
    reasons,
    'reasons-list',
    'Укажите причину проверки',
  );
  const groupsSelect = createSelect(groups, 'groups-list', 'Группа');

  const currentGroupTitle = document.createElement('h2');
  currentGroupTitle.innerHTML = 'Предыдущая проверка знаний';
  const currentGroupText = <HTMLHeadingElement>document.createElement('p');
  currentGroupText.classList.add('group-text');
  currentGroupText.innerHTML = 'Группа';
  const loginBtn = createBtn('login-btn', 'Начать тест!', ButtonTypes.Submit);

  container.append(formTitle, loginForm);

  loginForm.append(departament, employeeName, persSelect);

  loginForm.append(currentGroupTitle, groupsSelect, reasonsSelect);
  loginForm.append(loginBtn);
  loginForm.addEventListener('submit', submitHandler);
}
