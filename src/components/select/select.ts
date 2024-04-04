export function createSelect(arr: string[], id: string, title: string): HTMLDivElement {
    const container = <HTMLDivElement>document.createElement('div');
    container.classList.add('input-field');
    const select = document.createElement('select');
    select.id = id;
    arr.forEach((gr) => {
      const option = document.createElement('option');
      option.innerHTML = gr;
      option.value = gr;
      select.append(option);
    });
    const label = document.createElement('label');
    label.classList.add('login-form-label');
    label.innerHTML = title;
    label.setAttribute('for', `${id}`);
    container.append(label, select);
    return container;
  }