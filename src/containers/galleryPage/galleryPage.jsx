import s from './galleryPage.module.css'

import Albums from './albums/albums';
import Photos from './photos/photos';


function GalleryPage() {
    return(
        <div className={s.wrap}>
            <Albums />
            <Photos />
        </div>

    )
}

export default GalleryPage;
