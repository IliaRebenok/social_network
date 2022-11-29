import s from './islandWrap.module.css'

export default function IslandWrap(props) {
    return (
        <div className={s.wrap}>
            {props.children}
        </div>
    )
}
