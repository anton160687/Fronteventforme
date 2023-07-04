import {
  Dispatch,
  FormEvent,
  LegacyRef,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Alert from 'react-bootstrap/Alert';
import { FilePond, registerPlugin } from 'react-filepond';
import { FilePondErrorDescription, FilePondFile } from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { AUTH_URL, RESTORE_IMG } from '@/constant';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';

// регистрация плагинов для корректной работы библиотеки, согласно документации
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageValidateSize
);

type FileUploaderProps = {
  // setGallery: Dispatch<SetStateAction<string[]>>;
  setGallery: (imageIds: string[]) => void;
  setPreviewGallery?: Dispatch<SetStateAction<string[]>>;
  warning?: string;
  maxFiles?: number;
  required?: boolean;
};

function FileUploader({
  setGallery,
  setPreviewGallery,
  maxFiles = 30,
  warning,
  required = false,
}: FileUploaderProps) {
  const [files, setFiles] = useState<FilePondFile[]>([]);
  const [errorFiles, setErrorFiles] = useState<FilePondFile[]>([]);
  const [input, setInput] = useState<number | string>('');

  const API =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_AUTHURL
      : AUTH_URL;

  useEffect(() => {
    const serverIdArr: string[] = [];
    const previewArr: string[] = [];
    files.map((file) => serverIdArr.push(file.serverId));
    files.map((file) => previewArr.push(RESTORE_IMG + file.serverId));
    setGallery(serverIdArr);
    if (setPreviewGallery) setPreviewGallery(previewArr);

    //  setInput(serverIdArr.length);
  }, [files]);

  const onProcess = (
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) => {
    setFiles((prev) => [...prev, file]);
    if (error) console.error('FileUploader procces', error);
  };

  const onRemove = (
    error: FilePondErrorDescription | null,
    delFile: FilePondFile
  ) => {
    const newFiles = files.filter((file) => file.id !== delFile.id);
    setFiles(newFiles);
    const newErrorFiles = errorFiles.filter((file) => file.id !== delFile.id);
    setErrorFiles(newErrorFiles);
    if (error) console.error('FileUploader remove', error);
  };

  const onReorder = (files: FilePondFile[]) => {
    setFiles(files);
  };

  const onError = (
    error: FilePondErrorDescription,
    file?: FilePondFile | undefined,
    status?: any
  ) => {
    if (file) setErrorFiles((prev) => [...prev, file]);
  };

  const inputRef = useRef<any>();

  //для проверки на наличие некорректных файлов и вывода ошибки
  useEffect(() => {
    if ((errorFiles.length > 0 && files.length > 0) || errorFiles.length > 0) {
      inputRef.current.setCustomValidity('Поле содержит некорректные файлы');
    } else if (files.length > 0) inputRef.current.setCustomValidity('');
  }, [errorFiles]);

  return (
    <div className="mb-4 position-relative">
      <Alert variant="info" className="d-flex mb-4">
        <i className="fi-alert-circle me-2 me-sm-3"></i>
        <p className="fs-sm mb-1">{warning}</p>
      </Alert>
      {/* нужен для вывода ошибок, потому что встроенный в FilePond не всегда работает корректно*/}
      <input
        //type="number"
        ref={inputRef}
        className="position-absolute top-50 start-50"
        style={{ opacity: '0' }}
      />
      <FilePond
        //checkValidity={true}
        onprocessfile={onProcess}
        onremovefile={onRemove}
        required={required}
        onerror={onError}
        allowReorder={true}
        onreorderfiles={onReorder}
        server={{
          url: `${API}fp/`,
          process: 'process/',
          revert: 'revert/',
          restore: 'restore/',
          load: 'load/',
          fetch: 'fetch/',
        }}
        name="filepond"
        labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i> Загрузите фото</div><div>или перетащите их сюда</div>'
        acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']}
        allowMultiple={maxFiles === undefined || maxFiles > 1 ? true : false}
        maxFiles={maxFiles}
        maxFileSize="10MB"
        //maxTotalFileSize="25MB"
        className="file-uploader file-uploader-grid"
        instantUpload={true}
        chunkUploads={true}
        imageValidateSizeMinWidth={1200}
        imageValidateSizeMinHeight={900}
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
        imageValidateSizeLabelFormatError={'Тип не поддерживается'}
        imageValidateSizeLabelImageSizeTooSmall={
          'Изображение слишком маленькое'
        }
        imageValidateSizeLabelImageSizeTooBig={'Изображение слишком большое'}
        imageValidateSizeLabelExpectedMinSize={
          'Минимальный размер: {minWidth} × {minHeight}'
        }
        imageValidateSizeLabelExpectedMaxSize={
          'Максимальный размер: {maxWidth} × {maxHeight}'
        }
        imageValidateSizeLabelImageResolutionTooLow={
          'Слишком низкое разрешение'
        }
        imageValidateSizeLabelImageResolutionTooHigh={
          'Слишком высокое разрешение'
        }
        imageValidateSizeLabelExpectedMinResolution={
          'Минимальное разрешение^ {minResolution'
        }
        imageValidateSizeLabelExpectedMaxResolution={'Максимальное разрешение'}
      />
    </div>
  );
}

export default FileUploader;
