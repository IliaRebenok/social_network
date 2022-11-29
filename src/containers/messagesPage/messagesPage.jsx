import s from './messagesPage.module.css'
import MessagesList from './messagesList/messagesList'
import MessagesNav from './messagesNav/messagesNav'

function MessagesPage() {
    return(
        <div className={s.wrap}>
            <MessagesList />
            <MessagesNav />
        </div>

    )
}

export default MessagesPage;
