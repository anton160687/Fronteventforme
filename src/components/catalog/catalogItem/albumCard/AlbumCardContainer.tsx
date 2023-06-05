import React, { useEffect, useState } from 'react';
import { OutsideReg, WelcomeZone } from '@/types/placeType';
import AlbumCard from './AlbumCard';

type AlbumCardContainerProps = {
  territory: string;
  welcome_zones: WelcomeZone[];
  outside_reg: OutsideReg[];
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
}: AlbumCardContainerProps): JSX.Element {

  const data: DataType[] = [];
  const regPhotos = outside_reg[0]?.images_out_reg.map((img) => img.image);
  const welcomePhotos = welcome_zones[0]?.images_welcome.map(
    (img) => img.image
  );
  if (territory && territory.length) {
    data.push({ title: 'Территория', desc: territory, img: [] });
  }

  if (outside_reg && outside_reg.length) {
    data.push({
      title: 'Выездная регистрация',
      desc: outside_reg[0].outreg_conditions,
      img: regPhotos,
    });
  }

  if (welcome_zones && welcome_zones.length) {
    data.push({
      title: 'Welcome-зона',
      desc: welcome_zones[0].welcome_desc,
      img: welcomePhotos,
    });
  }

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
