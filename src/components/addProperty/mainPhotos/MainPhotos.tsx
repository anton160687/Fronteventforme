import { Dispatch, SetStateAction } from 'react';
import FileUploader from '../fileUploader/FileUploader';
import { ADD_PLACE_NAMES } from '@/constant';

type MainPhotosProps = {
  title: string;
  setMainPhotos: Dispatch<SetStateAction<string[]>>;
  setPreviewMainPhotos: Dispatch<SetStateAction<string[]>>;
};

function MainPhotos({
  title,
  setMainPhotos,
  setPreviewMainPhotos,
}: MainPhotosProps) {
  return (
    <section
      id={ADD_PLACE_NAMES.mainPhotos.id}
      className="card card-body border-0 shadow-sm p-4 mb-4"
    >
      <h2 className="h4 mb-4">
        <i className="fi-image text-primary fs-5 mt-n1 me-2"></i>
        {title} <span className="text-danger">*</span>
      </h2>
      <FileUploader
        setGallery={setMainPhotos}
        setPreviewGallery={setPreviewMainPhotos}
        required={true}
        warning={
          'Макс. размер файла – 10 МБ. Не более 30 фотографий. Форматы: jpeg, jpg, png. Сначала загрузите главное фото.'
        }
      />
    </section>
  );
}

export default MainPhotos;
