import NameActivity from './nameActivity/nameActivity';
import HorizontalLine from '../../../../assets/horizontalLine/horizontalLine'
import UserInfo from './userInfo/userInfo';
import ShowMoreButton from './showMoreButton/showMoreButton';
import Counters from './counters/counters';
import IslandWrap from '../../../../assets/islandWrap/islandWrap';
import s from './profileInfo.module.css'
import ShowMore from './moreInfo/showMore';

function ProfileInfo(props) {
    return (
        <IslandWrap>
            <div className={s.wrap}>
                <NameActivity userName='Santa Claus' activity='Online' whatsUp='HO-HO-HO' />
                <HorizontalLine narrow='true' />
                <UserInfo tableKey='Birth date' tableValue='January 1st 1900' link='#!' />
                <UserInfo tableKey='City' tableValue='Longyearbyen' link='#!' />
                <UserInfo tableKey='Marital status' tableValue='Married' link='#!' />
                <UserInfo tableKey='Website' tableValue='santaclausoffice.com' link='https://santaclausoffice.com/' />
                <ShowMoreButton />                            
                <HorizontalLine />
                <Counters data='23 friends 23 songs 2 videos' />
            </div>
        </IslandWrap>
    )
}
export default ProfileInfo;