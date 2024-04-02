import * as docx from 'docx';
import saveAs from 'save-as';

import { currentUser } from '../../components/loginForm/loginForm';
import { comission } from '../comission';

const daysInYear = 365;

const options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
} as const;

function getDate(): string {
  const date = new Date();
  return date.toLocaleString('ru', options);
}

function getNextYearDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + daysInYear);
  return date.toLocaleString('ru', options);
}

export default function generateProtocol() {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            alignment: 'center',
            heading: 'Heading2',
            children: [
              new docx.TextRun({
                text: `Протокол №___________`,
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            alignment: 'center',
            heading: 'Heading2',
            children: [
              new docx.TextRun({
                text: `Проверки знаний правил работы`,
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            alignment: 'center',
            heading: 'Heading2',
            children: [
              new docx.TextRun({
                text: `В электроустановках`,
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Дата проверки: ${getDate()}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Причина проверки:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Комиссия в составе:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[0].role}: ${comission[0].jobTitle} ${comission[0].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[1].role}: ${comission[1].jobTitle} ${comission[1].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[2].role}: ${comission[2].jobTitle} ${comission[2].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `${comission[3].role}: ${comission[3].jobTitle} ${comission[3].name}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            children: [
              new docx.TextRun({
                text: `Провела проверку знаний ПУЭ, ПОТЭУ, ПТЭЭП и других нормативных документов в соотвествиии с занимаемой должностью.`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: 'Heading3',
            children: [
              new docx.TextRun({
                text: 'Проверяемый',
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Фамилия, имя, отчество: ${currentUser.name} ${currentUser.surname} ${currentUser.thirdname}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Место работы: Горный университет`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Должность: ${currentUser.profession}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Дата предыдущей проверки:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Оценка, группа по электробезопасности:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: 'Heading3',
            children: [
              new docx.TextRun({
                text: `Результаты проверки знаний`,
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `По устройству энергоустановок и технической эксплуатации:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `По охране труда`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `По пожарной безопасности:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Других правил и инструкций:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: 'Heading3',
            children: [
              new docx.TextRun({
                text: `Заключение комиссии`,
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Общая оценка:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Группа по электробезопасности:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Продолжительность дублирования: -`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Допущен к работе в качестве:`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 50,
              after: 50,
            },
            children: [
              new docx.TextRun({
                text: `Дата следующей проверки: ${getNextYearDate()}`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 150,
              after: 150,
            },
            heading: 'Heading3',
            children: [
              new docx.TextRun({
                text: `Подписи`,
                color: '000000',
                bold: true,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[0].role}:                      ________________ /${comission[0].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[1].role}: ________________ /${comission[1].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[2].role}:                                     ________________ /${comission[2].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 300,
              after: 300,
            },
            children: [
              new docx.TextRun({
                text: `${comission[3].role}:                                     ________________ /${comission[3].shortName}/`,
                size: 24,
              }),
            ],
          }),
          new docx.Paragraph({
            spacing: {
              before: 350,
            },
            children: [
              new docx.TextRun({
                text: `С заключением комиссии ознакомлен: ____________________/__________________/`,
                size: 24,
              }),
            ],
          }),
        ],
      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'Protocol.docx');
  });
}
