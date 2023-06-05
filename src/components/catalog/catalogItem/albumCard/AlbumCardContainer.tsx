import React, { useEffect, useState } from 'react';
import { OutsideReg, WelcomeZone } from '@/types/placeType';
import AlbumCard from './AlbumCard';

type AlbumCardContainerProps = {
  territory: string;
  welcome_zones: WelcomeZone[] | string | undefined;
  outside_reg: OutsideReg[] | string | undefined;
  territoryImg?: string[];
  welcomeImg?: string[];
  outregImg?: string[];
};

type DataType = {
  title: string;
  desc: string;
  img: string[];
};

export default function AlbumCardContainer({
  territory,
  welcome_zones,
  outside_reg,
  territoryImg,
  welcomeImg,
  outregImg,
}: AlbumCardContainerProps): JSX.Element {
  const [data, setData] = useState<DataType[]>([]);

  const [regPhotos, setRegPhotos] = useState<string[]>([]);
  const [welcomePhotos, setWelcomePhotos] = useState<string[]>([]);

  const [outregDesc, setOutregDesc] = useState<string>('');
  const [welcomeDesc, setWelcomeDesc] = useState<string>('');

  useEffect(() => {
    //description
    if (outside_reg && outside_reg.length) {
      const outreg =
        typeof outside_reg === 'string'
          ? outside_reg
          : outside_reg[0].outreg_conditions;

      setOutregDesc(outreg);
    }

    if (welcome_zones && welcome_zones.length) {
      setWelcomeDesc(
        typeof welcome_zones === 'string'
          ? welcome_zones
          : welcome_zones[0].welcome_desc
      );
    }

    //photos
    let reg_photo: string[] = [];
    let welcome_photo: string[] = [];

    if (outregImg) {
      setRegPhotos(outregImg);
    } else if (outside_reg !== undefined && typeof outside_reg !== 'string') {
      reg_photo = outside_reg[0]?.images_out_reg.map((img) => img.image);
      setRegPhotos(reg_photo);
    }

    if (welcomeImg) {
      setWelcomePhotos(welcomeImg);
    } else if (
      welcome_zones !== undefined &&
      typeof welcome_zones !== 'string'
    ) {
      welcome_photo = welcome_zones[0]?.images_welcome.map((img) => img.image);
      setWelcomePhotos(welcome_photo);
    }

    //на случай, когда картинки еще не загрузились, а на превью уже перешли
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [territoryImg, welcomeImg, outregImg]);

  useEffect(() => {
    const alldata: DataType[] = [];

    if ((territory && territory.length) || territoryImg?.length) {
      alldata.push({
        title: 'Территория',
        desc: territory,
        img: territoryImg ? territoryImg : [],
      });
    }

    if (outregDesc || regPhotos?.length) {
      alldata.push({
        title: 'Выездная регистрация',
        desc: outregDesc,
        img: regPhotos,
      });
    }

    if (welcomeDesc || welcomePhotos?.length) {
      alldata.push({
        title: 'Welcome-зона',
        desc: welcomeDesc,
        img: welcomePhotos,
      });
    }

    setData(alldata);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomePhotos, regPhotos, outregDesc, welcomeDesc]);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <AlbumCard
            id={index}
            title={item.title}
            description={item.desc}
            images={item.img}
          />
        </div>
      ))}
    </>
  );
}
