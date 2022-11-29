import s from './photos.module.css'
import BlockInfo from '../../../../assets/blockInfo/blockInfo';
import IslandWrap from '../../../../assets/islandWrap/islandWrap';

function Photos() {
    return (
        <IslandWrap>
            <div className={s.pl5}>
            <BlockInfo name='Photos' counter='23' updates='show on the map' />
            </div>
            <div className={s.wrap}>
                <img className={s.item} src="https://celes.club/uploads/posts/2022-05/1653851357_2-celes-club-p-novogodnie-oboi-krasivie-2.jpg" alt="Christmas" />
                <img className={s.item} src="https://i.pinimg.com/originals/51/73/de/5173de88cdc9069d1ddc1b060966558f.jpg" alt="Christmas" />
                <img className={s.item} src="https://miridei.com/files/img/c/idei-dlya-doma/idei-receptov/top5-novogodnih-nizkokalorijnyh-blyud_rt.jpg" alt="Christmas" />
                <img className={s.item} src="https://a.d-cd.net/agAAAgFWHOA-960.jpg" alt="Christmas" />
            </div>
        </IslandWrap>
    )
}
export default Photos;

