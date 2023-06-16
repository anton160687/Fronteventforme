import GalleryItem from '@/components/_finder/GalleryItem';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-video.css';
import styles from '@/styles/catalog/places/LocationPhotos.module.scss';
import { ImagesPlace } from '@/types/placeType';

type LocationPhotosProps = {
  photoUrls: ImagesPlace[];
};

function LocationPhotos({ photoUrls }: LocationPhotosProps): JSX.Element {
  // В функции ниже заглушка '/img/emptyPhoto.png' используется для обеспечения безошибочной работы LightGallery

  console.log(
    '[photoUrls[1]?.image || /img/emptyPhoto.png',
    photoUrls[1]?.image || '/img/emptyPhoto.png'
  );

  function renderPhotos() {
    return (
      <LightGallery
        selector=".gallery-item"
        plugins={[lgThumbnail, lgZoom, lgFullScreen]}
        zoomFromOrigin={true}
        exThumbImage="data-external-thumb-image"
      >
        <section className={styles.location__photo_container}>
          <div className={styles.location__photo_main}>
            <GalleryItem
              href={photoUrls[0]?.image || '/img/emptyPhoto.png'}
              thumb={[photoUrls[0]?.image || '/img/emptyPhoto.png', 756, 400]}
              data-external-thumb-image={
                photoUrls[0]?.image || '/img/emptyPhoto.png'
              }
              caption="Gallery image caption"
              style={{ maxWidth: '756px' }}
              light={false}
              video={false}
              imgAlt="Фото имущества"
              className={styles.location__photo_main_left}
            />
          </div>

          <div className={styles.location__photo_main}>
            {photoUrls.length >= 5 ? (
              <>
                <div className={styles.location__photo_column}>
                  <GalleryItem
                    href={photoUrls[1]?.image || '/img/emptyPhoto.png'}
                    thumb={[
                      photoUrls[1]?.image || '/img/emptyPhoto.png',
                      372,
                      187,
                    ]}
                    data-external-thumb-image={
                      photoUrls[1]?.image || '/img/emptyPhoto.png'
                    }
                    caption="Gallery image caption"
                    style={{ maxWidth: '372px' }}
                    light={false}
                    video={false}
                    imgAlt="Фото имущества"
                    className={styles.location__photo_small}
                  />
                  <GalleryItem
                    href={photoUrls[2]?.image || '/img/emptyPhoto.png'}
                    thumb={[
                      photoUrls[2]?.image || '/img/emptyPhoto.png',
                      372,
                      187,
                    ]}
                    data-external-thumb-image={
                      photoUrls[2]?.image || '/img/emptyPhoto.png'
                    }
                    caption="Gallery image caption"
                    style={{ maxWidth: '372px' }}
                    light={false}
                    video={false}
                    imgAlt="Фото имущества"
                    className={styles.location__photo_small}
                  />
                </div>
                <div className={styles.location__photo_column}>
                  <GalleryItem
                    href={photoUrls[3]?.image || '/img/emptyPhoto.png'}
                    thumb={[
                      photoUrls[3]?.image || '/img/emptyPhoto.png',
                      372,
                      187,
                    ]}
                    data-external-thumb-image={
                      photoUrls[3]?.image || '/img/emptyPhoto.png'
                    }
                    caption="Gallery image caption"
                    style={{ maxWidth: '372px' }}
                    light={false}
                    video={false}
                    imgAlt="Фото имущества"
                    className={styles.location__photo_small_up}
                  />
                  <GalleryItem
                    href={photoUrls[4]?.image || '/img/emptyPhoto.png'}
                    thumb={[
                      photoUrls[4]?.image || '/img/emptyPhoto.png',
                      372,
                      187,
                    ]}
                    data-external-thumb-image={
                      photoUrls[4]?.image || '/img/emptyPhoto.png'
                    }
                    caption="Gallery image caption"
                    style={{ maxWidth: '372px' }}
                    light={false}
                    video={false}
                    imgAlt="Фото имущества"
                    className={styles.location__photo_small_down}
                  />
                </div>
              </>
            ) : (
              <GalleryItem
                href={photoUrls[1]?.image || '/img/emptyPhoto.png'}
                thumb={[photoUrls[1]?.image || '/img/emptyPhoto.png', 756, 400]}
                data-external-thumb-image={
                  photoUrls[1]?.image || '/img/emptyPhoto.png'
                }
                caption="Gallery image caption"
                style={{ maxWidth: '765px' }}
                light={false}
                video={false}
                imgAlt="Фото имущества"
                className={styles.location__photo_main_right}
              />
            )}
          </div>
        </section>
      </LightGallery>
    );
  }

  return <>{renderPhotos()} </>;
}

export default LocationPhotos;
