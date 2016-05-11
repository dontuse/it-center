import React, {PropTypes} from 'react';
import classNames from 'classnames';
import 'core-js/fn/array/find';

class FakeCalendar extends React.Component {
  render() {

    let mon = this.props.month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(this.props.year, mon);
    function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
      var day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }

    let days = []
        // заполнить первый ряд от понедельника
        // и до дня, с которого начинается месяц
        // * * * | 1  2  3  4
        for (var i = 0; i < getDay(d); i++) {
          days.push(<div className="b-calendar__grid"></div>);
        }

        // ячейки календаря с датами
        while (d.getMonth() == mon) {
          days.push(
            <div className="b-calendar__grid">
              <span className={
                classNames('b-calendar__day',
                { 'b-calendar__day_active': this.props.activeDays.find((val) => val === d.getDate()) },
                { 'b-calendar__day_current': d.getDate() === this.props.currentDay }
              )
                }>{d.getDate()}</span>
            </div>);

           if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
             days.push(<div className="b-calendar__row"></div>);
           }

          d.setDate(d.getDate() + 1);
        }

        // добить таблицу пустыми ячейками, если нужно
        if (getDay(d) != 0) {
          for (var i = getDay(d); i < 7; i++) {
            days.push(<div className="b-calendar__row">E</div>);
          }
        }

        return (
          <div className="b-calendar">
            <div className="b-calendar__header">
              <div className="b-calendar__current-month">декабрь 2015</div>
              <div className="b-calendar__arrow b-calendar__arrow_left"></div>
              <div className="b-calendar__arrow b-calendar__arrow_right"></div>
            </div>
            <div className="b-calendar__container">
                  {/*<div className="b-calendar__grid b-calendar__head">пн</div>
                  <div className="b-calendar__grid b-calendar__head">вт</div>
                  <div className="b-calendar__grid b-calendar__head">ср</div>
                  <div className="b-calendar__grid b-calendar__head">чт</div>
                  <div className="b-calendar__grid b-calendar__head">пт</div>
                  <div className="b-calendar__grid b-calendar__head">сб</div>
                  <div className="b-calendar__grid b-calendar__head">вс</div>*/}
                  {days}
            </div>
          </div>
        )
      }
    }

    export default FakeCalendar;
