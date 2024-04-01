interface Member {
  role: string;
  jobTitle: string;
  name: string;
  shortName: string;
}

export const comission: Member[] = [
  {
    role: 'Председатель комиссии',
    jobTitle: 'Главный энергетик',
    name: 'Гуркин Павел Борисович',
    shortName: 'П.Б. Гуркин',
  },
  {
    role: 'Заместитель председателя комиссии',
    jobTitle: 'Ведущий инженер',
    name: 'Горбатовский Игорь Александрович',
    shortName: 'И.А. Горбатовский',
  },
  {
    role: 'Член комиссии',
    jobTitle: 'Ведущий инженер',
    name: 'Аскаров Амаль Маратович',
    shortName: 'А.М. Аскаров',
  },
  {
    role: 'Член комиссии',
    jobTitle:
      'Главный инженер по организации эксплуатации и ремонту зданий и сооружений',
    name: 'Белоусов Юрий Олегович',
    shortName: 'Ю.О. Белоусов',
  },
];
