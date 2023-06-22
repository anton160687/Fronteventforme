import ImageLoader from '@/components/_finder/ImageLoader';

function EmptyArchive() {
  return (
    <>
      <h3 className="h3 mb-2">В архиве ничего нет</h3>
      <p className="pb-1">
        Если вы по какой-то причине решили снять свой бизнес с публикации на
        сайте, он будет сохранен здесь и доступен для восстановления
      </p>
      <ImageLoader
        width={577}
        height={542}
        alt="Открытый конверт с письмом"
        src="/img/lk/emptyArchive.svg"
      />
    </>
  );
}

export default EmptyArchive;
