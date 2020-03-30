

export const getMonths = () => {
  let months = []
  for (let i = 0; i < 12; i++) {
    if (i === 0 || i === 3 || i === 6 || i === 8 || i === 11) {
      months.push([
        { number: i },
        { number: i },
        { number: i },
        { number: i },
        { number: i },
      ])
    } else {
      months.push([{ number: i }, { number: i }, { number: i }, { number: i }])
    }
  }
  return months
}
const initialState = {
  dataRowsHead: {
    name: 'Фамилия Имя',
    project: 'Проект',
    status: 'Статус',
    months: [
      { name: 'Январь', weeks: [1, 2, 3, 4, 5] },
      { name: 'Февраль', weeks: [6, 7, 8, 9] },
      { name: 'Март', weeks: [10, 11, 12, 13] },
      { name: 'Апрель', weeks: [14, 15, 16, 17, 18] },
      { name: 'Май', weeks: [19, 20, 21, 22] },
      { name: 'Июнь', weeks: [23, 24, 25, 26] },
      { name: 'Июль', weeks: [27, 28, 29, 30, 31] },
      { name: 'Август', weeks: [32, 33, 34, 35] },
      { name: 'Сентябрь', weeks: [36, 37, 38, 39, 40] },
      { name: 'Октябрь', weeks: [41, 42, 43, 44] },
      { name: 'Ноябрь', weeks: [45, 46, 47, 48] },
      { name: 'Декабрь', weeks: [49, 50, 51, 52, 53] },
    ],
  },
  dataRowsBody: [
    {
      fullName: 'Имя 1',
      nameProject: 'Проект 1',
      selectedValue: 'Идёт',
      months: getMonths(),
    },
    {
      fullName: 'Имя 2',
      nameProject: 'Проект 1',
      selectedValue: 'Идёт',
      months: getMonths(),
    },
    {
      fullName: 'Имя 3',
      nameProject: 'Проект 1',
      selectedValue: 'Идёт',
      months: getMonths(),
    },
  ],
  dataStatus: {
    statuses: [
      { text: 'Идёт' },
      { text: 'Согласован старт' },
      { text: 'Завершается' },
    ],
    input: '0',
    value: 'Пример',
  },
  dataColor: {
    colors: [
      { color: '#388E3C', title: 'Загрузка подтверждена' },
      { color: '#303F9F', title: 'Загрузка запланирована' },
      { color: '#e53935', title: 'Простой' },
    ],
    value: 'Пример1111',
    input: '#FFEA00',
  },
  // showModalStatus: false,
  // showModalColor: false,
}
export default initialState