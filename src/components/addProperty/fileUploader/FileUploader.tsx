import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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

// регистрация плагинов для корректной работы библиотеки, согласно документации
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
);

type FileUploaderProps = {
  // setGallery: Dispatch<SetStateAction<string[]>>;
  setGallery: (imageIds: string[]) => void;
  setPreviewGallery?: Dispatch<SetStateAction<string[]>>;
  warning?: string;
  maxFiles: number;
  required?: boolean;
};

function FileUploader({
  setGallery,
  setPreviewGallery,
  maxFiles,
  warning,
  required = false,
}: FileUploaderProps) {
  const [files, setFiles] = useState<FilePondFile[]>([]);

  const API =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_AUTHURL
      : AUTH_URL;

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

    if (error) console.error('FileUploader remove', error);
  };

  useEffect(() => {
    const serverIdArr: string[] = [];
    const previewArr: string[] = [];
    files.map((file) => serverIdArr.push(file.serverId));
    files.map((file) => previewArr.push(RESTORE_IMG + file.serverId));
    setGallery(serverIdArr);
    if (setPreviewGallery) setPreviewGallery(previewArr);
  }, [files]);

  return (
    <div className="mb-4">
      <Alert variant="info" className="d-flex mb-4">
        <i className="fi-alert-circle me-2 me-sm-3"></i>
        <p className="fs-sm mb-1">{warning}</p>
      </Alert>

      <FilePond
        onprocessfile={onProcess}
        onremovefile={onRemove}
        required={required}
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
        allowMultiple={maxFiles > 1 ? true : false}
        maxFiles={maxFiles}
        maxFileSize="5MB"
        maxTotalFileSize="25MB"
        className="file-uploader file-uploader-grid"
        checkValidity={true}
        instantUpload={true}
        chunkUploads={true}
      />
    </div>
  );
}

export default FileUploader;
