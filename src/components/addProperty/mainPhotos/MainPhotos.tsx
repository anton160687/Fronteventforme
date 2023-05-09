import { Dispatch, SetStateAction } from 'react';
import FileUploader from '../fileUploader/FileUploader';
import { FilePondFile } from 'filepond';

type MainPhotosProps = {
  gallery: FilePondFile[];
  setGallery: Dispatch<SetStateAction<FilePondFile[]>>;
};

export function MainPhotos({ gallery, setGallery }: MainPhotosProps) {
  return (
    <section id="photos" className="card card-body border-0 shadow-sm p-4 mb-4">
      <h2 className="h4 mb-4">
        <i className="fi-image text-primary fs-5 mt-n1 me-2"></i>
        Главные фото площадки
      </h2>
      <FileUploader
        gallery={gallery}
        setGallery={setGallery}
        maxFiles={5}
        warning={
          'Макс. размер фото 5 МБ. Форматы: jpeg, jpg, png. Не более 5 фотографий. Сначала загрузите обложку.'
        }
      />
    </section>
  );
}
