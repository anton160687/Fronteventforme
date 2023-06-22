import ImageLoader from '@/components/_finder/ImageLoader';

function EmptyModeration() {
  return (
    <>
      <h3 className="h3 mb-2">Нет бизнесов на модерации</h3>
      <p className="pb-1">
        Начните создавать свою первую публикацию прямо сейчас или проверьте уже
        готовые бизнесы во вкладках “Опубликовано” и “Черновики”
      </p>
      <ImageLoader
        width={698}
        height={517}
        alt="Девушка из колл-центра выглядывает из ноутбука"
        src="/img/lk/emptyModeration.svg"
      />
    </>
  );
}

export default EmptyModeration;
