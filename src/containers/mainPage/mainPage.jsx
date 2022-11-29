import s from './mainPage.module.css'
import Content from './content/content.jsx';
import MyContent from './myContent/myContent.jsx';


function MainPage() {
    return(
        <div className={s.wrap}>
            <MyContent />
            <Content />
        </div>

    )
}
export default MainPage;