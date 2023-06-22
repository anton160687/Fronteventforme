import ImageLoader from '@/components/_finder/ImageLoader';

function EmptyBusiness() {
  return (
    <>
      <h3 className="h3 mb-2">Нет опубликованных бизнесов</h3>
      <p className="pb-1">
        Начните создавать свою первую публикацию прямо сейчас или проверьте уже
        готовые бизнесы во вкладках “Модерация” и “Черновики”
      </p>
      <ImageLoader
        width={544}
        height={517}
        alt="Человек через лупу смотрит на дом с долларом"
        src="/img/lk/emptyBusiness.svg"
      />
    </>
  );
}

export default EmptyBusiness;
