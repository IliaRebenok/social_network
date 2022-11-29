import s from './header.module.css'
import Logo from './logo/logo';
import Notifications from './notifications/notifications';
import Player from './player/player';
import Search from './search/search';
import Service from './service/service';
import TopNav from './topNav/topNav';

function Header() {
    return (
        <div className = {s.headerWrapper}>
            <div className={s.headerContent}>                
                <Logo />
                <Search />
                <Notifications number='69'/>
                <Player trackName='artist - some long named song'/>
                <Service />
                <TopNav />
            </div>
        </div>


    )
}
export default Header;