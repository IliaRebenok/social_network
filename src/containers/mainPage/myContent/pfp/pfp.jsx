import Item from './item';
import s from './pfp.module.css'
import Ico4 from '../../../../img/svg/middle_block_ico-4.svg'
import IslandWrap from '../../../../assets/islandWrap/islandWrap';

function Pfp() {
    return (
        <IslandWrap>
            <div className={s.leftShift10px}>
                <img src='https://s1.1zoom.ru/big0/6/Christmas_Santa_Claus_Beard_Winter_hat_557839_1280x943.jpg' alt='PFP' className={s.pic} />
                <button className={s.editButton}>Edit</button>
                <Item number='1' name='Memories' />
                <Item number='2' name='My questions' />
                <Item number='3' name='Money transfer' />
                <span className={s.line} />
                <div className={s.textGray}>
                    <img className={s.ico} src={Ico4} alt='relIcon'/>
                    <div>Stay in touch with those who isn't your friend</div>
                </div>
                <div className={s.link} >
                    Make your profile public
                </div>
            </div>
        </IslandWrap>
    )
}
export default Pfp;