import { employeesBase } from '../../data/employees';


export function createEmployeeCertificate(event: Event) {
    const container =  document.querySelector('.certificate-section')
    if (container){
    container.innerHTML=''}
    const target = <HTMLSelectElement>event.target;
    const selectedValue = target.value;
    const certificate = document.createElement('div')
    certificate.classList.add('certificate_open')
    const certificateLeftSide = document.createElement('div')
    certificateLeftSide.classList.add('certificate_open_left-side')
    const certificateRightSide = document.createElement('div')
    certificateRightSide.classList.add('certificate_open_right-side')
    certificate.append(certificateLeftSide,certificateRightSide)
    const title = document.createElement('h3')
    title.innerHTML='УДОСТОВЕРЕНИЕ'
    const company = document.createElement('p')
    company.innerHTML='Горный Университет'
    const dept = document.createElement('p')
    dept.id='dept'
    const destText = document.createElement('p')
    destText.id='destText'
    destText.innerHTML='Без записи результатов проверки знаний недействительно. Во время выполнения служебных обязанностей работник должен иметь удостоверение при себе'
    const name = document.createElement('p')
    name.id='name'
    const profession = document.createElement('p')
    profession.id='profession'
    const category = document.createElement('p')
    category.id='category'
    const group = document.createElement('p')
    group.id='group'
    name.innerHTML = selectedValue
    const arr=employeesBase
    .map((el) => {
      return el.employees.find((e) => {
        return e.name === selectedValue;
      });
    })
    .filter((el) => el != null)
    const deptValue = (<HTMLSelectElement>document.getElementById('departaments-select')).value
    dept.innerText=deptValue
    name.innerHTML=selectedValue
    const professionValue = arr.map((el) => el!.jobTitle)[0];
    profession.innerHTML=professionValue
    const categoryValue = arr.map((el) => el!.category)[0];
    if (categoryValue) {
    category.innerHTML = categoryValue}
    const groupValue = arr.map((el) => el!.group)[0];
    if(groupValue){
    group.innerHTML = groupValue
    }
    certificateLeftSide.append(title, company, dept,destText)
    certificateRightSide.append(name, profession, category, group)
    container?.append(certificate)
  }

  export function createClosedSertificate() {
    const container =  document.querySelector('.certificate-section')
    if (container){
    container.innerHTML=''
    const closedSertificate = <HTMLDivElement>document.createElement('div')
    const closedSertificateTitle=<HTMLSpanElement>document.createElement('span')
    closedSertificateTitle.classList.add('certificate_closed-title')
    closedSertificateTitle.innerHTML='УДОСТОВЕРЕНИЕ'
    closedSertificate.classList.add('certificate_closed')
    closedSertificate.append(closedSertificateTitle)
    container.append(closedSertificate)
  }}

