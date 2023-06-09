import { Dispatch, SetStateAction } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { AUTH_URL } from '@/constant';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

type InfoProfileProps = {
    profile: string [];
    setProfile: Dispatch<SetStateAction<string[]>>;
}

function InfoProfile({ profile, setProfile }: InfoProfileProps) {

    const API = process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_AUTHURL : AUTH_URL;

    registerPlugin(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview,
        FilePondPluginImageCrop,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    )

    //поскольку на аве только 1 картинка, функции тут попроще, чем в форме Площадки
    function onProcess(error: FilePondErrorDescription | null, file: FilePondFile) {
        setProfile([file.serverId]);
        if (error) console.error('FileUploader procces', error);
    };
    function onRemove(error: FilePondErrorDescription | null, delFile: FilePondFile) {
        setProfile([]);
        if (error) console.error('FileUploader remove', error);
    };

    return (
            <FilePond
                files={profile}
                onprocessfile={onProcess}
                onremovefile={onRemove}
                // required={required}
                server={{
                    url: `${API}fp/`,
                    process: 'process/',
                }}
                name="filepond"
                labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Сменить фото</span>'
                acceptedFileTypes={['image/png', 'image/jpeg']}
                stylePanelLayout='compact'
                imagePreviewHeight={160}
                imageCropAspectRatio='1:1'
                imageResizeTargetWidth={200}
                imageResizeTargetHeight={200}
                maxFiles={1}
                className='file-uploader bg-secondary'
            />
    )
}

export default InfoProfile;
