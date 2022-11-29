import IslandWrap from '../../../../assets/islandWrap/islandWrap'
import BlockInfo from '../../../../assets/blockInfo/blockInfo';
import SubsItem from './subscribers/subsItem';
import HorizontalLine from '../../../../assets/horizontalLine/horizontalLine';
import Video from './video/video';
import Audio from './audio/audio';


function MyMedia() {
    return (
        <IslandWrap>
            <BlockInfo name='Subscriptions' counter='69' />
            <SubsItem title="Snowmen" description='A thousand ideas how to build a cold friend' source='http://almode.ru/uploads/posts/2021-12/1639091089_33-almode-ru-p-snegoviki-2022-42.jpg' />
            <SubsItem title="Christmass tree" description='Welcome to our community' source='https://miro.medium.com/max/1400/1*K4AO4bUxPascCbxiRrhtjg.jpeg' />
            <SubsItem title="Elks" description='Your mate is here' source='https://cdn.mibluemag.com/wp-content/uploads/sites/117/2019/04/elk-2.jpg' />
            <HorizontalLine short='true'/>
            <BlockInfo name='Video' counter='2' />
            <Video link='https://www.youtube.com/embed/4hbru1nLBeU'  />
            <Video link='https://www.youtube.com/embed/5_o65q1y60M'  />
            <HorizontalLine  short='true'/>
            <BlockInfo name='Audio' counter='23' />
            <Audio artist='Singer' composition='song' />
            <Audio artist='Singer-Finger' composition='song-young' />
            <Audio artist='My favourite artist' composition='Love this song' />
        </IslandWrap>
    )
}
export default MyMedia;