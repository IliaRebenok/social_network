import s from './item.module.css'
import Ico1 from '../../../../img/svg/middle_block_ico-1.svg'
import Ico2 from '../../../../img/svg/middle_block_ico-2.svg'
import Ico3 from '../../../../img/svg/middle_block_ico-3.svg'


function Item(props) {
    let a = '';
    switch (props.number) {
        case '1': a = Ico1
            break;
        case '2': a = Ico2
            break;
        case '3': a = Ico3
            break;
        default: break;
    }

    return (
        <div className={s.wrap}>
            <img src={a} alt='relIco'/>
            <div className={s.text}>{props.name}</div>
        </div>
    )
}

export default Item;