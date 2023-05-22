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
import { TEST_URL } from '@/constant';

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
  setGallery: Dispatch<SetStateAction<string[]>>;
  warning?: string;
  maxFiles: number;
  required?: boolean;
};

function FileUploader({
  setGallery,
  maxFiles,
  warning,
  required = false,
}: FileUploaderProps) {
  const [files, setFiles] = useState<FilePondFile[]>([]);
  const [test, setTest] = useState<any>([]);

  const onProcess = (
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) => {
    setFiles((prev) => [...prev, file]);
    if (error) console.error('FileUploader procces', error);

    // const onChange = (e: FilePondFile[]) => {
    // 	e.map((item) => {
    // 		console.log('item', item.file);
    setTest((prev: any) => [...prev, URL.createObjectURL(file.file)]);

    console.log(
      'URL.createObjectURL(file.file)',
      URL.createObjectURL(file.file)
    );

    // });
    //};
  };

  useEffect(() => {
    console.log('test', test);
  }, [test]);

  useEffect(() => {
    console.log('files', files);
  }, [files]);

  const onRemove = (
    error: FilePondErrorDescription | null,
    delFile: FilePondFile
  ) => {
    const newFiles = files.filter((file) => file.id !== delFile.id);
    setFiles(newFiles);

    if (error) console.error('FileUploader remove', error);
  };

  useEffect(() => {
    const newArr: string[] = [];
    files.map((file) => newArr.push(file.serverId));
    setGallery(newArr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <div className="mb-4">
      <Alert variant="info" className="d-flex mb-4">
        <i className="fi-alert-circle me-2 me-sm-3"></i>
        <p className="fs-sm mb-1">{warning}</p>
      </Alert>
      <hr />
      Тестируемое
      {test.map((tes, index) => (
        <img key={index} src={tes}></img>
      ))}
      <hr />
      FilePond
      {files.map((file, index) => (
        <img
          key={index}
          src={`blob:http://127.0.0.1:3000/${file.serverId}`}
        ></img>
      ))}
      FilePond API
      {files.map((file, index) => (
        <img key={index} src={`blob:${TEST_URL}${file.serverId}`}></img>
      ))}
      <hr />
      <FilePond
        onprocessfile={onProcess}
        onremovefile={onRemove}
        required={required}
        server={{
          url: 'http://188.225.24.70:8080/fp',
          process: '/process/',
          revert: '/revert/',
          restore: '/restore/',
          load: '/load/',
          fetch: '/fetch/',
        }}
        name="filepond"
        labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i> Загрузите фото</div><div>или перетащите их сюда</div>'
        acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']}
        allowMultiple={maxFiles > 1 ? true : false}
        maxFiles={maxFiles}
        maxFileSize="5MB"
        className="file-uploader file-uploader-grid"
        checkValidity={true}
        instantUpload={true}
        chunkUploads={true}
      />
    </div>
  );
}

export default FileUploader;
