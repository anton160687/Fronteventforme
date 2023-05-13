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
import { FilePondErrorDescription, FilePondFile } from 'filepond';

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
  name: string;
};

function FileUploader({
  gallery,
  setGallery,
  maxFiles,
  warning,
  name,
}: FileUploaderProps) {
  console.log('gallery', gallery);

  return (
    <div className="mb-4">
      <Alert variant="info" className="d-flex mb-4">
        <i className="fi-alert-circle me-2 me-sm-3"></i>
        <p className="fs-sm mb-1">{warning}</p>
      </Alert>

      <FilePond
        onupdatefiles={setGallery}
        server={{
          url: 'http://188.225.24.70:8080/fp',
          process: '/process/',
          revert: '/revert/',
          restore: '/restore/',
          load: '/load/',
          fetch: '/fetch/',
        }}
        name={name}
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
        maxFileSize="2MB"
        className="file-uploader file-uploader-grid"
        checkValidity={true}
        instantUpload={true}
        chunkUploads={true}
        // onChange={onChangeFiles}
      />
    </div>
  );

  // function FileUploader({ name, gallery, setGallery }: FileUploaderProps) {

  //     function onProcessFile (error: FilePondErrorDescription | null, file: FilePondFile) {
  //         console.log("onProcessFile serverId", file.serverId);
  //       };

  //     return (
  //         <section id='photos' className='card card-body border-0 shadow-sm p-4 mb-4'>
  //             <h2 className='h4 mb-4'>
  //                 <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
  //                 Photos / video
  //             </h2>
  //             <Alert variant='info' className='d-flex mb-4'>
  //                 <i className='fi-alert-circle me-2 me-sm-3'></i>
  //                 <p className='fs-sm mb-1'>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />
  //                     The maximum video size is 10 MB. Formats: mp4, mov.</p>
  //             </Alert>
  //             <FilePond
  //                 files={gallery}
  //                 onupdatefiles={setGallery}
  //                 onprocessfile={onProcessFile}
  //                 server={{
  //                     process: {
  //                         url: 'http://188.225.24.70:8080/fp/process/',
  //                         method: 'POST',
  //                         ondata: (formData) => {
  //                             return formData;
  //                         },
  //                         onerror: (response) => { console.log(response.data); },
  //                     }
  //                 }
  //                 }
  //                 name={name}
  //                 labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
  //                 acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
  //                 allowMultiple={true}
  //                 maxFiles={4}
  //                 maxFileSize='2MB'
  //                 className='file-uploader file-uploader-grid'
  //             />
  //         </section>
  //     )
}

export default FileUploader;
