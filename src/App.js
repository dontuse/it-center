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
            <div className="b-box__col-1">
              <HorizontalNav
              />
            </div>
            <div className="b-box__col-2">
              <Search />
            </div>
          </section>
        </header>
        <section className="b-grid">
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
                <div className="b-box__col-1">
                  <div className="b-title">
                    Новости
                  </div>
                  <NewsListPreview
                    news = {[
                      {
                        content: (<div><a href="">Нортон Э.</a> празднует день рождения</div>),
                        pic: '/tmp/dude.jpg'
                      },
                      {
                        content: (
                          <div>Изменение в порядке выдачи виз <br/>
                          <a href="">Методика разработана в целях организации проведения анализа,
                           оптимизации, гармонизации и описания общих процессов</a>
                          </div>
                        ),
                        pic: '/tmp/dude.jpg',
                      },
                      {
                        content: (
                          <div>Изменение в порядке выдачи виз <br/>
                          <a href="">Методика разработана в целях организации проведения анализа,
                           оптимизации, гармонизации и описания общих процессов</a>
                          </div>
                        ),
                        pic: '/tmp/dude.jpg',
                      },
                      {
                        content: (
                          <div><a href="">Иванов И.И.</a> — новый сотрудник отдела</div>
                        ),
                        pic: '/tmp/dude.jpg'
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="b-box__col-2">
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
            <section style={{ background: 'white', padding: '30px' }} className="b-box">
              <div className="b-title">
                Предстоящие события
              </div>
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
                    text: 'Решения Совета Евразийской экономической комиссии в 2015 году'
                  },
                  {
                    date: '10 Декабря',
                    current: false,
                    text: 'Порядок организации проведения заседания Евразийского совета'
                  },
                  {
                    date: '17 Декабря',
                    current: false,
                    text: 'Распоряжения Высшего Евразийского экономического совета на уровне глав правительств'
                  },
                  {
                    date: '12 Декабря',
                    current: false,
                    text: 'Меморандум о сотрудничестве по вопросам торговли между Евразийской экономической комиссией и Кабинетом Министров Украины'
                  },
                ]}
                />
            </section>
            <section className="b-box">
              <div className="b-box__col-1-wrap">
                <div className="b-box__col-1">
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
                </div>
              </div>
              <div className="b-box__col-2">
                <div className="b-title">
                  Текущие задачи
                </div>
                <div className="d-box">
                  <div>в работе</div>
                  <div className="b-progress">
                    <div
                      style={{ width: '20%'}}
                      className="b-progress__line">
                    </div>
                  </div>
                  <div>
                    Порядок организации проведения заседания Высшего Евразийского экономического совета
                  </div>
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
