import s from './friends.module.css'
import IslandWrap from '../../../../assets/islandWrap/islandWrap'
import BlockInfo from '../../../../assets/blockInfo/blockInfo'
import FriendsItem from './friendsItem/friendsItem';
import HorizontalLine from '../../../../assets/horizontalLine/horizontalLine'


function Friends() {
    return (
        <IslandWrap>
            <BlockInfo name='Friends' counter='23' updates='Updates' />
            <div className={s.wrap}>
                <FriendsItem source='http://ofad.org/files/imagecache/daily_picture/daily-photo/recent-and-random-portraits_8.jpg' name='John Wasovsky' />
                <FriendsItem source='https://get.pxhere.com/photo/man-person-people-looking-male-guy-portrait-young-student-human-facial-expression-smile-face-one-cool-head-handsome-confident-portrait-photography-facial-hair-778280.jpg' name='Mike Jackson' />
                <FriendsItem source='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/993a9141332353.57a1ce913ee47.jpg' name='Anna Smith' />
                <FriendsItem source='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg' name='Danny Black' />
                <FriendsItem source='https://www.dannyst.com/staging/1522/wp-content/uploads/gallery-portraits-of-strangers-11.jpg' name='Bobby Taylor' />
                <FriendsItem source='https://get.pxhere.com/photo/man-person-people-hair-male-portrait-model-black-facial-expression-hairstyle-smile-close-up-face-head-beauty-morocco-moroccan-marrakesh-portrait-photography-722096.jpg' name='Sam Robins' />
            </div>
            <HorizontalLine short='true'/>
            <BlockInfo name='Friends online' counter='23' />
            <div className={s.wrap}>
                <FriendsItem source='http://ofad.org/files/imagecache/daily_picture/daily-photo/recent-and-random-portraits_8.jpg' name='John Wasovsky' />
                <FriendsItem source='https://get.pxhere.com/photo/man-person-people-looking-male-guy-portrait-young-student-human-facial-expression-smile-face-one-cool-head-handsome-confident-portrait-photography-facial-hair-778280.jpg' name='Mike Jackson' />
                <FriendsItem source='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/993a9141332353.57a1ce913ee47.jpg' name='Anna Smith' />
                <FriendsItem source='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg' name='Danny Black' />
                <FriendsItem source='https://www.dannyst.com/staging/1522/wp-content/uploads/gallery-portraits-of-strangers-11.jpg' name='Bobby Taylor' />
                <FriendsItem source='https://get.pxhere.com/photo/man-person-people-hair-male-portrait-model-black-facial-expression-hairstyle-smile-close-up-face-head-beauty-morocco-moroccan-marrakesh-portrait-photography-722096.jpg' name='Sam Robins' />
            </div>
        </IslandWrap>
    )
}
export default Friends;