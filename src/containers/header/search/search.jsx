import s from './search.module.css'
import searchIco from '../../../img/svg/search-ico.svg'

function Search() {
    return(
        <div className={s.wrap}>
            <img src={searchIco} alt="search" className={s.ico} />
            <input type="text" className={s.search} placeholder='Search'/>
        </div>

    )
}
export default Search;