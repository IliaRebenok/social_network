import Item from './item/item';
import Line from './line';
import s from './nav.module.css'
import NavFooter from './navFooter/navFooter';


function Nav() {
    return (
        <div className={s.navWrap}>
            <div>
                <Item type='My page' link='/mainpage' />
                {/*<Item type='Feed' />*/}
                <Item type='Messanger' number='69' link='/messagespage' />
                <Item type='Friends' number='1' link='/friendspage' />
                <Item type='Photos' number='69' link='/gallerypage' />
                <Item type='Music' link='/music' />
                <Item type='Video' link='/videos' />
                <Item type='Favorites' link='/favorites' />
                {/*<Item type='Files' link='/mainpage'/>*/}
                {/* <Item type='Commercials' /> */}
            </div>
            <Line />
            <NavFooter />
        </div>

    )
}
export default Nav;