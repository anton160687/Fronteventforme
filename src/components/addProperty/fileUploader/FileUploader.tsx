import { Dispatch, SetStateAction, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FilePondFile } from 'filepond';

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
  gallery: FilePondFile[];
  setGallery: Dispatch<SetStateAction<FilePondFile[]>>;
  warning?: string;
  maxFiles: number;
};

function FileUploader({
  gallery,
  setGallery,
  maxFiles,
  warning,
}: FileUploaderProps) {
  console.log('gallery', gallery);

  const [file, setFile] = useState<string>();

  const onChange = (e: FilePondFile[]) => {
    e.map((item) => {
      console.log('item', item.file);
      setFile(URL.createObjectURL(item.file));
    });
  };

  console.log('file', file);

  return (
    <div className="mb-4">
      <Alert variant="info" className="d-flex mb-4">
        <i className="fi-alert-circle me-2 me-sm-3"></i>
        <p className="fs-sm mb-1">{warning}</p>
      </Alert>

      <img src={file} />

      <FilePond
        //files={gallery}
        onupdatefiles={onChange}
        server="http://188.225.24.70:8080/fp"
        // server={{
        //   process: {
        //     url: 'http://188.225.24.70:8080/fp/process/',
        //     method: 'POST',
        //     withCredentials: false,
        //     headers: {
        //       'Access-Control-Expose-Headers':
        //         'Content-Disposition, Content-Length, X-Content-Transfer-Id',
        //       'Acess-Control-Allow-Origin': '*',
        //     },
        //     // timeout: 7000,
        //     // onload: null,
        //     // onerror: null,
        //     // ondata: null,
        //   },
        //   // revert: 'http://188.225.24.70:8080/fp/revert/',
        //   // restore: 'http://188.225.24.70:8080/fp/restore/',
        //   // load: 'http://188.225.24.70:8080/fp/load/',
        //   // fetch: 'http://188.225.24.70:8080/fp/fetch/',
        // }}
        name="gallery"
        labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Загрузите фото / видео</div><div>или перетащите их сюда</div>'
        acceptedFileTypes={[
          'image/png',
          'image/jpeg',
          'image/jpg',
          'video/mp4',
          'video/mov',
        ]}
        allowMultiple={maxFiles > 1 ? true : false}
        maxFiles={maxFiles}
        maxFileSize="5MB"
        className="file-uploader file-uploader-grid"
        checkValidity={true}
        instantUpload={true}
        // onChange={onChangeFiles}
      />
    </div>
  );
}

export default FileUploader;
