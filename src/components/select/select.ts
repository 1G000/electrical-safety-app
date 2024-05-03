import { employeesBase } from '../../data/employees';
import {
  createEmployeeCertificate,
  createClosedSertificate,
} from '../certificate/certificate';

function onSelectChange(event: Event) {
  createClosedSertificate();
  const prev = document.querySelector('.employees_input-field');
  if (prev) {
    prev.remove();
  }
  const target = <HTMLSelectElement>event.target;
  const selectedValue = target.value;
  createEmployeesList(selectedValue);
}

export function createDeptSelect(arr: string[]): HTMLDivElement {
  const container = <HTMLDivElement>document.createElement('div');
  container.classList.add('input-field');
  const select = document.createElement('select') as HTMLSelectElement;
  const option = document.createElement('option') as HTMLOptionElement;
  select.id = 'departaments-select';
  select.onchange = onSelectChange;
  option.innerText = 'Подразделение';
  option.selected = true;
  option.disabled = true;
  select.append(option);
  arr.forEach((gr) => {
    const option = document.createElement('option');
    option.innerHTML = gr;
    option.value = gr;
    select.append(option);
  });
  // const label = document.createElement('label');
  // label.classList.add('login-form-label');
  // label.innerHTML = 'Подразделение';
  // label.setAttribute('for', 'departaments-select');
  container.append(select);
  return container;
}

function createEmployeesList(value: string) {
  const form = document.querySelector('.form_top-section');
  const container = <HTMLDivElement>document.createElement('div');
  container.classList.add('employees_input-field');
  const employeesNames = employeesBase
    .filter((element) => element.departament === value)
    .map((el) => el.employees.map((e) => e.name));
  const select = document.createElement('select');
  const option = document.createElement('option') as HTMLOptionElement;
  select.id = 'employees-select';
  select.onchange = createEmployeeCertificate;
  option.innerText = 'Сотрудник';
  option.selected = true;
  option.disabled = true;
  select.append(option);
  employeesNames[0].forEach((gr) => {
    const option = document.createElement('option');
    option.innerHTML = gr;
    option.value = gr;
    select.append(option);
  });

  // const label = document.createElement('label');
  // label.classList.add('login-form-label');
  // label.innerHTML = 'Сотрудники';
  // label.setAttribute('for', 'employees-select');
  container.append(select);
  form?.append(container);
}
