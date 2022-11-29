import s from './friendsPage.module.css'
import FriendsList from './friendsList/friendsList';
import FriendsAct from './friendsActions/friendsAct';
import FriendsSuggestions from './friendsSuggestions/friendsSuggestions';

function FriendsPage() {
    return (
        <div className={s.wrap}>
            <FriendsList />
            <div>
                <FriendsAct />
                <FriendsSuggestions />
            </div>

        </div>

    )
}

export default FriendsPage;
