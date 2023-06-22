import ImageLoader from '@/components/_finder/ImageLoader';

function EmptyDrafts() {
  return (
    <>
      <h3 className="h3 mb-2">Черновиков нет</h3>
      <p className="pb-1">
        Незавершенные бизнесы будут автоматически переноситься сюда для
        дальнейшего редактирования и, при завершении, отправки на модерацию
      </p>
      <ImageLoader
        width={470}
        height={464}
        alt="Мужчина с текстовыделителем подчеркивает текст в своей анкете"
        src="/img/lk/emptyWishlist.svg"
      />
    </>
  );
}

export default EmptyDrafts;
