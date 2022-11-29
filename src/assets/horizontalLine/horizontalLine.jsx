import s from './horizontalLine.module.css'


function HorizontalLine(props) {
    if (props.narrow) {
        return (
            <div className={`${s.line} + ${s.narrow}`} />
        )
    } else if (props.short) {
        return (
            <div className={`${s.line} + ${s.short}`} />
        )
    } else {
        return (
            <div className={s.line} />
        )
    }
}
export default HorizontalLine;