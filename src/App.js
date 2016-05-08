import React, { Component } from 'react';
import Man from './components/Man.jsx';
import HorizontalNav from './components/HorizontalNav.jsx';
import VerticalNav from './components/VerticalNav.jsx';
import Search from './components/Search.jsx';
import NewsListPreview from './components/NewsListPreview.jsx';
import EventsList from './components/EventsList.jsx';
import DocListPr from './components/DocListPr.jsx';
import SystemsList from './components/SystemsList.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="b-page">
        <header className="b-header b-grid">
          <div className="b-wrap">
            <aside className="b-grid__col-1">
              <a className="b-logo" href="">
                <span className="b-logo__pic-box"></span>
                <span className="b-logo__txt-box">
                  Информационно-
                  справочная система
                </span>
              </a>
            </aside>
            <section className="b-grid__col-2 b-page__head-box b-box b-box_head">
              <div className="b-box__col-1-wrap">
                <div className="b-box__col-1">
                  <HorizontalNav
                    />
                </div>
              </div>
              <div className="b-box__col-2">
                <Search />
              </div>
            </section>
          </div>
        </header>
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
                  <span className="b-action">
                    <span>Забронировать студию</span>
                  </span>
                </a>
                <a className="b-actions__el" href="">
                  <span className="b-action">
                    <span>Забронировать студию</span>
                  </span>
                </a>
                <a className="b-actions__el" href="">
                  <span className="b-action">
                    <span>Забронировать студию</span>
                  </span>
                </a>
              </section>
            </div>
            <section className="b-box">
              <div className="b-box__col-1-wrap">
                <div className="b-box__col-1 b-widget">
                  <div className="b-title">
                    Новости
                  </div>
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
                </div>
              </div>
              <div className="b-box__col-2 b-widget">
                <div className="b-title">
                  Информационные системы Комиссии
                </div>
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
              </div>
            </section>
            <section className="b-widget">
              <div className="b-title">
                Предстоящие события
              </div>
              <div className="b-box">
                <div className="b-box__col-1-wrap">
                  <div className="b-box__col-1">
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
                <div className="b-box__col-2">
                  wefwefwefew
                </div>
              </div>
            </section>
            <section className="b-box">
              <div className="b-box__col-1-wrap">
                <div className="b-box__col-1 b-widget">
                  <div className="b-title">
                    Последние документы
                  </div>
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
                </div>
              </div>
              <div className="b-box__col-2 b-widget">
                <div className="b-title">
                  Текущие задачи
                </div>
                <div className="b-tasks-list">
                  <div className="b-tasks-list__el">
                    <div className="b-tasks-list__status">в работе</div>
                    <div className="b-progress b-tasks-list__progress">
                      <div
                        style={{ width: '20%'}}
                        className="b-progress__line">
                      </div>
                    </div>
                    <div className="b-tasks-list__txt">
                      <a href="">
                        Порядок организации проведения заседания Высшего Евразийского экономического совета
                      </a>
                    </div>
                  </div>
                  <div className="b-tasks-list__el">
                    <div className="b-tasks-list__status">этап просрочен</div>
                    <div className="b-progress b-progress_alarm b-tasks-list__progress">
                      <div
                        style={{ width: '56%'}}
                        className="b-progress__line">
                      </div>
                    </div>
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
              </div>
            </section>
          </main>
        </section>
        <footer className="b-page__footer b-footer">
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
        </footer>
      </div>
    );
  }
}
