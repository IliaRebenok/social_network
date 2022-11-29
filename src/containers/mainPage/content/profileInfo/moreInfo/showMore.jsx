import InfoTitle from '../infoTitle/infoTitle';
import UserInfo from '../userInfo/userInfo';
import s from './showMore.module.css'

function ShowMore(props) {
        if (!props.show) {
            return null;
        }
    return(   
        <div className={s.wrap}>
            <InfoTitle title='Basic information'/>
            <UserInfo tableKey='Hometown' tableValue='Chita' link='#!'/>
            <InfoTitle title='Career'/>
            <UserInfo tableKey='Work placce' tableValue='The factory of happiness, NYC from 1990. Delivery man' link='#!'/>
            <InfoTitle title='Education'/>
            <UserInfo tableKey='School' tableValue='St. Robert primary school' link='#!'/>
            <InfoTitle title='Personal info'/>
            <UserInfo tableKey='Communities' tableValue='Christmass tree' link='#!'/>
        </div>     
            
    )
}
export default ShowMore;

