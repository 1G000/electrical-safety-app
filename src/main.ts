import './style.scss';
import createLoginForm from './Новая папка/loginForm/loginForm';

function createContainer(): void {
  const body = <HTMLBodyElement>document.querySelector('.body');
  const container = <HTMLDivElement>document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);
}
createContainer();

createLoginForm();
