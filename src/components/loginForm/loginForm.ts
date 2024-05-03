import './loginForm.scss';
import { createHeading, createTest } from '../testPage/testPage';
import { employeesBase } from '../../data/employees';
import { User } from '../interfaces';
import { createDeptSelect } from '../select/select';
import { createClosedSertificate } from '../certificate/certificate';
import { createBtn } from '../button/button';
import { ButtonTypes } from '../button/button';
import generateProtocol from '../../data/questions/builder';

const departaments = employeesBase.map((el) => el.departament);

export const currentUser: User = {
  name:'',
  reason: '',
  profession: '',
  category: '',
  group: '',
  previousDate: '',
  departament: '',
};

function submitHandler(event: Event): void {
  event.preventDefault();
  const name = (<HTMLParagraphElement>document.getElementById('name')).innerHTML;
  const profession = (<HTMLParagraphElement>document.getElementById('profession')).innerHTML;
  const category = (<HTMLParagraphElement>document.getElementById('category')).innerHTML;
  const group = (<HTMLParagraphElement>document.getElementById('group')).innerHTML;
  const previousDate = "12.03.1990"
  const reason = 'Очередная'
  const departament = (<HTMLParagraphElement>document.getElementById('dept')).innerHTML;
  currentUser.reason = reason;
  currentUser.name = name;
  currentUser.profession = profession;
  currentUser.category = category;
  currentUser.group = group;
  currentUser.previousDate = previousDate
  currentUser.departament = departament;
  createHeading();
  createTest();
}

export default function createLoginForm(): void {
  const container = <HTMLDivElement>document.querySelector('.container');
  container.innerHTML = '';
  const headerContainer = <HTMLHeadElement>document.createElement('header');
  const formTitle = <HTMLHeadingElement>document.createElement('h1');
  formTitle.innerHTML = '⚡Проверка знаний по электробезопасности⚡';
  const formTopSection = <HTMLDivElement>document.createElement('div');
  formTopSection.classList.add('form_top-section')
  const loginForm = <HTMLFormElement>document.createElement('form');
  const certificateSection = <HTMLDivElement>document.createElement('div');
  certificateSection.classList.add('certificate-section')
  loginForm.method = 'get';
  loginForm.classList.add('login-form');
  const departament = createDeptSelect(departaments)
  container.append(headerContainer,formTitle, loginForm);
  formTopSection.append(departament)
  const btn = createBtn('login-btn', 'Начать тест!', ButtonTypes.Submit )
  const protocolBtn = createBtn('login-btn', 'Получить протокол!', ButtonTypes.Button)
  protocolBtn.addEventListener('click', ()=>{
  const name = (<HTMLParagraphElement>document.getElementById('name')).innerHTML;
  const profession = (<HTMLParagraphElement>document.getElementById('profession')).innerHTML;
  const category = (<HTMLParagraphElement>document.getElementById('category')).innerHTML;
  const group = (<HTMLParagraphElement>document.getElementById('group')).innerHTML;
  const previousDate = "12.03.1990"
  const reason = 'Очередная'
  const departament = (<HTMLParagraphElement>document.getElementById('dept')).innerHTML;
  currentUser.reason = reason;
  currentUser.name = name;
  currentUser.profession = profession;
  currentUser.category = category;
  currentUser.group = group;
  currentUser.previousDate = previousDate
  currentUser.departament = departament;
  
    generateProtocol()
  })
  loginForm.append(formTopSection,certificateSection,btn,protocolBtn)
  createClosedSertificate()
  loginForm.addEventListener('submit', submitHandler);
}
