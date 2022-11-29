import s from './App.module.css';
import Header from '../containers/header/header'
import Nav from '../containers/nav/nav.jsx'
import MainPage from '../containers/mainPage/mainPage';
import MessagesPage from '../containers/messagesPage/messagesPage';
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className={s.App}>
        <Header />
        <div className={s.page}>
          <Nav />
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}