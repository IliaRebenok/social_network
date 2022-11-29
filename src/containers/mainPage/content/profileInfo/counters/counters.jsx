import s from './counters.module.css'

function Counters(props) {
    const a = props.data.split(' ');
    switch (a.length) {
        case 2: return (
            <div className={s.wrap}>
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[0]}</div>
                    <div className={s.counterName}>{a[1]}</div>
                </a >
            </div>
        );
        case 4: return (
            <div className={s.wrap}>
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[0]}</div>
                    <div className={s.counterName}>{a[1]}</div>
                </a >
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[2]}</div>
                    <div className={s.counterName}>{a[3]}</div>
                </a >
            </div>
        );
        case 6: return (
            <div className={s.wrap}>
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[0]}</div>
                    <div className={s.counterName}>{a[1]}</div>
                </a >
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[2]}</div>
                    <div className={s.counterName}>{a[3]}</div>
                </a >
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[4]}</div>
                    <div className={s.counterName}>{a[5]}</div>
                </a >
            </div>
        );
        case 8: return (
            <div className={s.wrap}>
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[0]}</div>
                    <div className={s.counterName}>{a[1]}</div>
                </a >
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[2]}</div>
                    <div className={s.counterName}>{a[3]}</div>
                </a >
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[4]}</div>
                    <div className={s.counterName}>{a[5]}</div>
                </a >
                <a href='#!' className={s.item}>
                    <div className={s.counterNumber}>{a[6]}</div>
                    <div className={s.counterName}>{a[7]}</div>
                </a >
            </div>
        );
        default: break;
    }
}
export default Counters;
