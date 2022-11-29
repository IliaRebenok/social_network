import s from './whatsNew.module.css'
import photoIco from '../../../../img/svg/whats_ico-1.svg'
import mediaIco from '../../../../img/svg/whats_ico-2.svg'
import musicIco from '../../../../img/svg/whats_ico-3.svg'
import textIco from '../../../../img/svg/whats_ico-4.svg'
import lampIco from '../../../../img/svg/whats_ico-5.svg'
import lockIco from '../../../../img/svg/whats_ico-6.svg'
import IslandWrap from '../../../../assets/islandWrap/islandWrap'

function WhatsNew() {
    return (
        <IslandWrap>
                <div className={s.wrap}>
                    <img className={s.smallAvatar} src="https://s1.1zoom.ru/big0/6/Christmas_Santa_Claus_Beard_Winter_hat_557839_1280x943.jpg" alt="smallAvatar" />
                    <input className={s.input} placeholder="What's up?"></input>
                    <img className={s.ico} src={photoIco} alt='UploadPhoto' />
                    <img className={s.ico} src={mediaIco} alt='UploadMedia' />
                    <img className={s.ico} src={musicIco} alt='UploadMusic' />
                    <img className={s.ico} src={textIco} alt='UploadText' />
                    <div className={s.verticalLine}></div>
                    <img className={s.ico} src={lampIco} alt='UploadX' />
                    <img className={s.ico} src={lockIco} alt='UploadLock' />
                </div>
        </IslandWrap>
    )
}
export default WhatsNew;