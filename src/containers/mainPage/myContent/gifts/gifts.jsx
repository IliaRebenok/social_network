import s from './gifts.module.css'
import BlockInfo from '../../../../assets/blockInfo/blockInfo';
import IslandWrap from '../../../../assets/islandWrap/islandWrap';

function Gifts() {
    return (
        <IslandWrap>
            <BlockInfo name='Gifts' counter='23'/>
            <div className={s.images}>
                <img className={s.image} src="https://i.ebayimg.com/00/s/OTA2WDg2MQ==/z/d2wAAOSwwkVfC0aX/$_57.JPG?set_id=8800005007" alt="gift" />
                <img className={s.image} src="https://jooinn.com/images/gift-bow-4.jpg" alt="gift" />
                <img className={s.image} src="https://images.freeimages.com/images/previews/266/gift-1422193.jpg" alt="gift" />
            </div>
        </IslandWrap>
    )
}
export default Gifts;