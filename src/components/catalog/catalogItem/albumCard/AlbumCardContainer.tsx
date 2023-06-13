import React from 'react';
import { OutsideReg, Territory, WelcomeZone } from '@/types/placeType';
import AlbumCard from './AlbumCard';

type AlbumCardContainerProps = {
  territory: Territory[];
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
}: AlbumCardContainerProps) {
  const data: DataType[] = [];
  if (territory[0]?.territory_desc || territory[0]?.images_territory.length)
    data.push({
      title: 'Территория',
      desc: territory[0]?.territory_desc,
      img: territory[0]?.images_territory.map((image) => image.image),
    });

  if (
    outside_reg[0]?.outreg_conditions ||
    outside_reg[0]?.images_out_reg.length
  )
    data.push({
      title: 'Выездная регистрация',
      desc: outside_reg[0]?.outreg_conditions,
      img: outside_reg[0]?.images_out_reg.map((image) => image.image),
    });

  if (welcome_zones[0]?.welcome_desc || welcome_zones[0]?.images_welcome.length)
    data.push({
      title: 'Welcome-зона',
      desc: welcome_zones[0]?.welcome_desc,
      img: welcome_zones[0]?.images_welcome.map((image) => image.image),
    });

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
