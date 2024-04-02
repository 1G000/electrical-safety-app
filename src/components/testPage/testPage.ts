import { currentUser } from '../loginForm/loginForm';
import questions from '../../data/questions/questions';
const answersQty: number = 10;
const maxErrorsQty: number = 2;
import generateProtocol from '../../data/questions/builder';

export function createHeading() {
  const container = document.querySelector('.container');
  if (container) {
    container.innerHTML = '';
    const heading = document.createElement('p');
    heading.classList.add('heading');
    heading.innerHTML = `Приветствуем Вас, ${currentUser.name} ${currentUser.thirdname}!`;
    container.append(heading);
  }
}

function undisableBtn() {
  const checkBtn = <HTMLButtonElement>document.querySelector('.check-btn');
  const values: NodeListOf<Element> = document.querySelectorAll(
    '[type="radio"]:checked',
  );
  if (values.length === answersQty) {
    checkBtn.disabled = false;
  } else {
    checkBtn.disabled = true;
  }
}

function showErrors() {
  const container = document.querySelector('.container');
  if (container) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-msg');
    const values: NodeListOf<Element> = document.querySelectorAll(
      '[type="radio"]:checked',
    );
    const newValues = Array.from(values).map(
      (value) => (<HTMLInputElement>value).value,
    );

    const errorsQty = newValues.filter((el: string) => el === 'false').length;
    container.innerHTML = '';
    container.append(errorMessage);
    const protocolBtn = <HTMLButtonElement>document.createElement('button');
    protocolBtn.classList.add('protocol-btn');
    if (errorsQty <= maxErrorsQty) {
      protocolBtn.innerText = 'Получить протокол';
      protocolBtn.addEventListener('click', generateProtocol);
    } else {
      protocolBtn.innerText = 'Получить результаты';
      console.log('много ошибок');
    }
    errorMessage.innerHTML = `У Вас ${errorsQty} ошибок`;
    container.append(protocolBtn);
  }
}

export function createTest(): void {
  const container = document.querySelector('.container');
  const questionsList = document.createElement('ol');
  if (container) {
    questions.forEach((question, i) => {
      const questionItem = document.createElement('li');
      const questionText = document.createElement('p');
      const answersField = document.createElement('div');
      answersField.classList.add('answers-field');

      const answers = question.answers.sort(() => Math.random() - 0.5);
      answers.forEach((answer, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.classList.add('radio-btn');
        radioBtn.addEventListener('click', undisableBtn);
        radioBtn.type = 'radio';
        if (answer.isRight === true) {
          radioBtn.value = 'true';
        } else {
          radioBtn.value = 'false';
        }
        radioBtn.name = `answer${i}`;
        radioBtn.id = `answer${i}_${index}`;
        const answerItem = document.createElement('div');
        const answerText = document.createElement('label');
        answerText.setAttribute('for', `answer${i}_${index}`);
        answerItem.classList.add('answer-item');
        answerText.innerText = answer.text;
        answerItem.append(radioBtn, answerText);
        answersField.append(answerItem);
      });
      questionText.innerHTML = question.question;
      questionItem.append(questionText, answersField);
      questionsList.append(questionItem);
      container.append(questionsList);
    });

    const checkBtn = document.createElement('button');
    checkBtn.disabled = true;
    checkBtn.classList.add('check-btn');
    checkBtn.innerText = 'Проверить';
    checkBtn.addEventListener('click', showErrors);
    container.append(checkBtn);
  }
}
