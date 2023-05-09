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

// регистрация плагинов для корректной работы библиотеки, согласно документации
registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
)

type FileUploaderProps = {
    gallery: string[],
    setGallery: Dispatch<SetStateAction<string[]>>
}

function FileUploader({ gallery, setGallery }: FileUploaderProps) {
    console.log(gallery);
    return (
        <section id='photos' className='card card-body border-0 shadow-sm p-4 mb-4'>
            <h2 className='h4 mb-4'>
                <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
                Photos / video
            </h2>
            <Alert variant='info' className='d-flex mb-4'>
                <i className='fi-alert-circle me-2 me-sm-3'></i>
                <p className='fs-sm mb-1'>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />
                    The maximum video size is 10 MB. Formats: mp4, mov.</p>
            </Alert>
            <FilePond
                files={gallery}
                onupdatefiles={setGallery}
                server={{
                    process: {
                        url: 'http://188.225.24.70:8080/fp/process/',
                        method: 'POST',
                        ondata: (formData) => {
                            const upload_field = 'gallery';
                            formData.append('upload_field_name', upload_field);
                            return formData;
                        },
                        onerror: (response) => { console.log(response.data); },
                    }
                }
                }
                // server={
                //     {                     
                //         process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                //             // fieldName is the name of the input field
                //             // file is the actual file object to send
                //             const formData = new FormData();
                //             formData.append(fieldName, file, file.name);
                //             formData.append('upload_field_name', fieldName);

                //             console.log(fieldName);

                //             const request = new XMLHttpRequest();
                //             request.open('POST', 'http://188.225.24.70:8080/fp/process/');

                //             // Should call the progress method to update the progress to 100% before calling load
                //             // Setting computable to false switches the loading indicator to infinite mode
                //             request.upload.onprogress = (e) => {
                //                 progress(e.lengthComputable, e.loaded, e.total);
                //             };

                //             // Should call the load method when done and pass the returned server file id
                //             // this server file id is then used later on when reverting or restoring a file
                //             // so your server knows which file to return without exposing that info to the client
                //             request.onload = function () {
                //                 if (request.status >= 200 && request.status < 300) {
                //                     // the load method accepts either a string (id) or an object
                //                     load(request.responseText);
                //                 } else {
                //                     // Can call the error method if something is wrong, should exit after
                //                     error('oh no');
                //                 }
                //             };

                //             request.send(formData);

                //             // Should expose an abort method so the request can be cancelled
                //             return {
                //                 abort: () => {
                //                     // This function is entered if the user has tapped the cancel button
                //                     request.abort();

                //                     // Let FilePond know the request has been cancelled
                //                     abort();
                //                 },
                //             };
                //         },
                //     }
                // }
                name='gallery'
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
            />
        </section>
    )
}

export default FileUploader;