import {Colors} from '../styles/Colors';

export class TestHelper {
  static getRandomArrWithHasAnswer = (arr: any) => {
    return [...arr]
      .map((_, i, arrCopy) => {
        const rand = i + Math.floor(Math.random() * (arrCopy.length - i));
        [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
        return arrCopy[i];
      })
      .map(i => ({...i, hasAnswer: false}));
  };

  static setElementHasAnswer = (arr: any, id: number) => {
    return arr.map((el: any) => (el.id === id ? {...el, hasAnswer: true} : el));
  };

  static getModalEndTitle = (errorsCount: number) => {
    return errorsCount === 0
      ? 'Идеально'
      : errorsCount < 2
      ? 'Не плохо'
      : 'Вероятно вам нужно повторить урок';
  };

  static getModalEndTitleColor = (errorsCount: number) => {
    return errorsCount === 0
      ? Colors.leaf
      : errorsCount < 2
      ? Colors.yellow
      : Colors.danger;
  };
}
