import React, { Component } from 'react';
import Man from './components/Man.jsx';
import VerticalNav from './components/VerticalNav.jsx';
import NewsListPreview from './components/NewsListPreview.jsx';
import EventsList from './components/EventsList.jsx';
import DocListPr from './components/DocListPr.jsx';
import SystemsList from './components/SystemsList.jsx';
import Progress from './components/Progress.jsx';
import FakeCalendar from './components/FakeCalendar.jsx';
import Header from './components/Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="b-page">
        <Header />
        <section className="b-grid b-wrap">
          <aside className="b-grid__col-1 b-page__aside">
            <Man
              name = 'Константинопольский Константин Викторович'
              position = 'Начальник отдела'
              portrait = '/tmp/dude.jpg'
            />
            <VerticalNav
              items = {[
                {
                  name: 'Контакты',
                  link: ''
                },
                {
                  name: 'Новости',
                  link: ''
                },
                {
                  name: 'Заявки',
                  link: ''
                },
                {
                  name: 'Справочные материалы',
                  link: ''
                },
                {
                  name: 'Регламенты',
                  link: ''
                },
                {
                  name: 'Каталог докуметов',
                  link: '',
                  active: true
                },
                {
                  name: 'Материалы для заседаний',
                  link: ''
                },
                {
                  name: 'Календарь',
                  link: ''
                },
              ]}
            />
          </aside>
          <main className="b-grid__col-2 b-page__main-box">
            <div className="b-page__actions-box">
              <section className="b-actions">
                <a className="b-actions__el" href="">
                  <span className="b-action b-action__type-1">
                    <span>Забронировать студию</span>
                  </span>
                </a>
                <a className="b-actions__el" href="">
                  <span className="b-action b-action__type-2">
                    <span>Справочник сотрудников</span>
                  </span>
                </a>
                <a className="b-actions__el" href="">
                  <span className="b-action b-action__type-3">
                    <span>Мои подписки</span>
                  </span>
                </a>
              </section>
            </div>
            <section className="b-box">
              <div className="b-box__col-1-wrap">
                <div className="b-box__col-1 b-widget">
                  <header className="b-widget__head">
                    <div className="b-title b-widget__title">
                      Новости
                    </div>
                  </header>
                  <NewsListPreview
                    news = {[
                      {
                        content: (<div><a href="">Нортон Э.</a> празднует день рождения</div>),
                        pic: '/tmp/news1.jpg',
                      },
                      {
                        content: (
                          <div>Изменение в порядке выдачи виз <br/>
                          <a href="">Методика разработана в целях организации проведения анализа,
                           оптимизации, гармонизации и описания общих процессов</a>
                          </div>
                        ),
                        pic: '/tmp/news2.jpg',
                        meta: 'Добавил Сергеев С.А.  сегодня в 10:15',
                      },
                      {
                        content: (
                          <div>Изменение в порядке выдачи виз <br/>
                          <a href="">Методика разработана в целях организации проведения анализа,
                           оптимизации, гармонизации и описания общих процессов</a>
                          </div>
                        ),
                        pic: '/tmp/news3.jpg',
                        meta: 'Добавил Сергеев С.А.  сегодня в 10:15',
                      },
                      {
                        content: (
                          <div><a href="">Иванов И.И.</a> — новый сотрудник отдела</div>
                        ),
                        pic: '/tmp/news4.jpg'
                      },
                    ]}
                  />
                  <a className="b-what-is-that b-widget__what-is" href=""></a>
                </div>
              </div>
              <div className="b-box__col-2 b-widget">
                <header className="b-widget__head">
                  <div className="b-title b-widget__title">
                    Информационные системы Комиссии
                  </div>
                </header>
                <SystemsList
                  systems = {[
                    {
                      name: 'ИСУД',
                      pic: '/tmp/s1.png'
                    },
                    {
                      name: 'АС «МТО»',
                      pic: '/tmp/s2.png'
                    },
                    {
                      name: 'ИС «Кадры»',
                      pic: '/tmp/s3.png'
                    },
                    {
                      name: 'АИС «Бюджет»',
                      pic: '/tmp/s4.png'
                    },
                    {
                      name: 'Обращение медизделий на территории ЕАЭС',
                      pic: '/tmp/s5.png'
                    },
                  ]}
                />
                <a className="b-what-is-that b-widget__what-is" href=""></a>
                <a className="b-what-is-that b-what-is-that_plus b-widget__what-is-2" href=""></a>
              </div>
            </section>
            <section className="b-widget">
              <header className="b-widget__head">
                <div className="b-title">
                  Предстоящие события
                </div>
              </header>
              <div className="b-box-inner">
                <div className="b-box-inner__col-2">
                  <FakeCalendar
                    year = {2016}
                    month = {12}
                    activeDays = {
                      [5,10,17,22]
                    }
                    currentDay = {8}
                  />
                </div>
                <div className="b-box-inner__col-1-wrap">
                  <div className="b-box-inner__col-1">
                    <EventsList
                      events = {[
                        {
                          date: '5 декабря',
                          current: false,
                          text: 'Практический семинар: «НДС: к чему готовиться, и как избежать ошибок».'
                        },
                        {
                          date: '8 декабря',
                          current: true,
                          text: 'Семинар о законных способах налоговой оптимизации, которые предлагает российское налоговое законодательство.'
                        },
                        {
                          date: '10 Декабря',
                          current: false,
                          text: 'Семинар о законных способах налоговой оптимизации, которые предлагает российское налоговое законодательство.'
                        },
                        {
                          date: '17 Декабря',
                          current: false,
                          text: 'Заседание Коллегии ЕЭК №27'
                        },
                        {
                          date: '12 Декабря',
                          current: false,
                          text: 'Практический семинар: «НДС: к чему готовиться, и как избежать ошибок». '
                        },
                      ]}
                      />
                  </div>
                </div>

              </div>
              <a className="b-what-is-that b-widget__what-is" href=""></a>
            </section>
            <section className="b-box">
              <div className="b-box__col-1-wrap">
                <div className="b-box__col-1 b-widget">
                  <header className="b-widget__head">
                    <div className="b-title">
                      Последние документы
                    </div>
                  </header>
                  <DocListPr
                    docs = {[
                      {
                        link: '',
                        text: 'Практический семинар: «НДС: к чему готовиться, и как избежать ошибок».'
                      },
                      {
                        link: '',
                        text: 'Решения Совета Евразийской экономической комиссии в 2015 году'
                      },
                      {
                        link: '',
                        text: 'Порядок организации проведения заседания Евразийского совета'
                      },
                      {
                        link: '',
                        text: 'Распоряжения Высшего Евразийского экономического совета на уровне глав правительств'
                      },
                      {
                        link: '',
                        text: 'Меморандум о сотрудничестве по вопросам торговли между Евразийской экономической комиссией и Кабинетом Министров Украины'
                      },
                    ]}
                  />
                  <div className="b-all">
                    <a href="">Все документы (105)</a>
                  </div>
                  <a className="b-what-is-that b-widget__what-is" href=""></a>
                </div>
              </div>
              <div className="b-box__col-2 b-widget">
                <header className="b-widget__head">
                  <div className="b-title">
                    Текущие задачи
                  </div>
                </header>
                <div className="b-tasks-list">
                  <div className="b-tasks-list__el">
                    <div className="b-tasks-list__status">в работе</div>
                    <Progress
                      cssMix = {'b-tasks-list__progress'}
                      estimated = {29.95}
                      spent = {26.33}
                    />
                    <div className="b-tasks-list__txt">
                      <a href="">
                        Порядок организации проведения заседания Высшего Евразийского экономического совета
                      </a>
                    </div>
                  </div>
                  <div className="b-tasks-list__el">
                    <div className="b-tasks-list__status">этап просрочен</div>
                    <Progress
                      cssMix = {'b-tasks-list__progress'}
                      estimated = {36.55}
                      spent = {56.33}
                    />
                    <div className="b-tasks-list__txt">
                      <a href="">
                        Порядок организации проведения заседания Высшего Евразийского экономического совета
                      </a>
                    </div>
                  </div>
                </div>
                <div className="b-all">
                  <a href="">Все задачи (26)</a>
                </div>
                <a className="b-what-is-that b-widget__what-is" href=""></a>
              </div>
            </section>
          </main>
        </section>
        <footer className="b-page__footer b-footer">
          <section className="b-footer__container">
            <div className="b-footer__box-1">
              <a className="b-f-logo" href=""></a>
            </div>
            <div className="b-footer__box-2">
              <nav className="b-simple-nav">
                <a className="b-simple-nav__item" href="">Евразийский экономический союз</a>
                <a className="b-simple-nav__item" href="">Евразийская экономическая комиссия</a>
                <a className="b-simple-nav__item" href="">Правовой портал</a>
              </nav>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}
