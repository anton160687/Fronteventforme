import { Dispatch, SetStateAction } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { AUTH_API } from '@/constant';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

type InfoProfileProps = {
  profile: string[];
  setProfile: Dispatch<SetStateAction<string[]>>;
};

function InfoProfile({ profile, setProfile }: InfoProfileProps) {
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  );

  //поскольку на аве только 1 картинка, функции тут попроще, чем в форме Площадки
  function onProcess(
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) {
    setProfile([file.serverId]);
    if (error) console.error('FileUploader procces', error);
  }
  function onRemove(
    error: FilePondErrorDescription | null,
    delFile: FilePondFile
  ) {
    setProfile([]);
    if (error) console.error('FileUploader remove', error);
  }

  return (
    <FilePond
      onprocessfile={onProcess}
      onremovefile={onRemove}
      // required={required}
      server={{
        url: `${AUTH_API}fp/`,
        process: 'process/',
        revert: 'revert/',
        load: 'load/',
        fetch: 'fetch/',
      }}
      name="filepond"
      labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Сменить фото</span>'
      acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']}
      stylePanelLayout="compact"
      imagePreviewHeight={160}
      imageCropAspectRatio="1:1"
      imageResizeTargetWidth={200}
      imageResizeTargetHeight={200}
      maxFiles={1}
      className="file-uploader bg-secondary"
      //Перевод ошибок с англ на русский
      labelInvalidField={'Поле содержит некорректные файлы'}
      labelFileWaitingForSize={'Ожидание определения размера файла'}
      labelFileSizeNotAvailable={'Не удалось определить размер файла'}
      labelFileLoading={'Загрузка'}
      labelFileLoadError={'Ошибка во время загрузки'}
      labelFileProcessing={'Загрузка'}
      labelFileProcessingComplete={'Загрузка завершена'}
      labelFileProcessingAborted={'Загрузка отменена'}
      labelFileProcessingError={'Ошибка во время загрузки'}
      labelFileProcessingRevertError={'Ошибка во время отмены загрузки'}
      labelFileRemoveError={'Ошибка во время удаления'}
      labelTapToCancel={'Нажмите, чтобы отменить'}
      labelTapToRetry={'Нажмите, чтобы повторить попытку'}
      labelTapToUndo={'Нажмите, чтобы отменить'}
      labelButtonRemoveItem={'Удалить'}
      labelButtonAbortItemLoad={'Прервать'}
      labelButtonRetryItemLoad={'Повторить попытку'}
      labelButtonAbortItemProcessing={'Прервать'}
      labelButtonUndoItemProcessing={'Отменить'}
      labelButtonRetryItemProcessing={'Повторить попытку'}
      labelButtonProcessItem={'Загрузить'}
      labelMaxFileSizeExceeded={'Слишком большой файл'}
      labelMaxFileSize={'Максимальный размер файла: {filesize}'}
      labelMaxTotalFileSizeExceeded={'Превышен максимальный общий размер'}
      labelMaxTotalFileSize={'Максимальный общий размер: {filesize}'}
      labelFileTypeNotAllowed={'Файл недопустимого типа'}
      fileValidateTypeLabelExpectedTypes={
        'Ожидается {allButLastType} или {lastType}'
      }
    />
  );
}

export default InfoProfile;
