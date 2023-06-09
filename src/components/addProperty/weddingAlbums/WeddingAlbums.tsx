import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Form, Row } from 'react-bootstrap';
import FileUploader from '../fileUploader/FileUploader';
import { ADD_PLACE_NAMES } from '@/constant';
import { Album } from '@/types/placeType';

type WeddingAlbumsProps = {
  index: number;
  albums: (Album | null)[];
  setAlbums: Dispatch<SetStateAction<(Album | null)[]>>;
};

const letters = 1000;

export default function WeddingAlbums({
  index,
  albums,
  setAlbums,
}: WeddingAlbumsProps) {
  const [lettersLeft, setLettersLeft] = useState<number>(letters);
  const [album, setAlbum] = useState<Album>({
    title: '',
    album_img: [],
    preview_album_img: [],
  });
  const [albumImg, setAlbumImg] = useState<string[]>([]);
  const [previewAlbumImg, setPreviewAlbumImg] = useState<string[]>([]);

  function handleChangeInsideForm(e: ChangeEvent<HTMLInputElement>) {
    handleChange(e);
    setLettersLeft(letters - e.target.value.length);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAlbum({ ...album, title: e.target.value });
  }

  useEffect(() => {
    setAlbum({
      ...album,
      album_img: albumImg,
      preview_album_img: previewAlbumImg,
    });
  }, [albumImg, previewAlbumImg]);

  //при изменении Альбома - прокидываем в общий список
  useEffect(() => {
    let newAlbumsArr = [...albums];
    newAlbumsArr[index] = album;
    setAlbums(newAlbumsArr);
  }, [album]);

  return (
    <Form.Group>
      <h2 className="h4 mb-4">
        <i className="fi-party-popper text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.weddingAlbum.name}
      </h2>
      <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
        Название альбома
      </Form.Label>
      <Form.Control
        name="title"
        placeholder="Напишите имена молодоженов"
        maxLength={letters}
        value={album.title}
        onChange={handleChangeInsideForm}
      />
      <Form.Text>Осталось {lettersLeft} символов</Form.Text>

      <Row className="mb-4">
        <Form.Group>
          <Form.Label className="d-block mb-2 mt-4 pb-1">
            Загрузите фотографии
          </Form.Label>

          <FileUploader
            setGallery={setAlbumImg}
            setPreviewGallery={setPreviewAlbumImg}
            warning="Макс. размер файла – 10 МБ. Не более 30 фотографий. Форматы: jpeg, jpg, png. Сначала загрузите главное фото."
          />
        </Form.Group>
      </Row>
    </Form.Group>
  );
}
