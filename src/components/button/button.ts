export enum ButtonTypes {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
  }

  export function createBtn(className: string, text: string, type?: ButtonTypes ){
   const btn = <HTMLButtonElement>document.createElement('button');
   btn.textContent = text;
   btn.value = 'start!';
   btn.type = type ? type : 'button'
   btn.classList.add(className);
  return btn
  }
