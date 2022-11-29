import s from './item.module.css'
import { Link } from "react-router-dom";

import myPageIco from '../../../img/svg/nav_item-my_page.svg'
import feedIco from '../../../img/svg/nav_item-2.svg'
import messangerIco from '../../../img/svg/nav_item-3.svg'
import callsIco from '../../../img/svg/nav_item-4.svg'
import friendsIco from '../../../img/svg/nav_item-5.svg'
import communitiesIco from '../../../img/svg/nav_item-6.svg'
import photosIco from '../../../img/svg/nav_item-7.svg'
import musicIco from '../../../img/svg/nav_item-8.svg'
import videoIco from '../../../img/svg/nav_item-video.svg'
import addvIco from '../../../img/svg/nav_item-addv.svg'
import miniAppsIco from '../../../img/svg/nav_item-apps.svg'
import vkPayIco from '../../../img/svg/nav_item-VKPay.svg'
import favIco from '../../../img/svg/nav_item-notes.svg'
import filesIco from '../../../img/svg/nav_item-files.svg'
import commercialIco from '../../../img/svg/nav_item-adds.svg'



function Item(props) {
    let t = props.type;
    let link;
    switch (t) {
        case 'My page': link = myPageIco;
            break;
        case 'Feed': link = feedIco;
            break;
        case 'Messanger': link = messangerIco;
            break;
        case 'Calls': link = callsIco;
            break;
        case 'Friends': link = friendsIco;
            break;
        case 'Photos': link = photosIco;
            break;
        case 'Advertisments': link = commercialIco;
            break;
        case 'Communities': link = communitiesIco;
            break;
        case 'Music': link = musicIco;
            break;
        case 'Video': link = videoIco;
            break;
        case 'Mini apps': link = miniAppsIco;
            break;
        case 'VK-pay': link = vkPayIco;
            break;
        case 'Favorites': link = favIco;
            break;
        case 'Files': link = filesIco;
            break;
        case 'Commercials': link = addvIco;
            break;
        default: break;
    }


    if (props.number) {
        return (
            
                <Link className={s.wrap} to={props.link}>

                    <img src={link} alt="ico" className={s.ico} />
                    <div className={s.content}>
                        {props.type}
                    </div>
                    <div className={s.number}>
                        {props.number}
                    </div>
                </Link>
            
        )
    } else {
        return (
            
                <Link className={s.wrap} to={props.link}>
                    <img src={link} alt="ico" className={s.ico} />
                    <div className={s.content}>
                        {props.type}
                    </div>
                </Link>
            
        )
    }
}
export default Item;