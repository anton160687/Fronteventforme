import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-video.css';
import React from 'react';
import { AreaReceived } from '@/types/areaType';
import PlaceArea from './PlaceArea';
// import { addDays } from 'date-fns';

type PlaceAreasProps = {
  areas: (AreaReceived | null)[] | undefined;
  average_check: number;
};

function PlaceAreas({ areas, average_check }: PlaceAreasProps): JSX.Element {
  return (
    <div id="areas">
      {areas &&
        areas.map((area, index) => {
          if (area) {
            return (
              <PlaceArea
                area={area}
                average_check={average_check}
                key={index}
              />
            );
          } else {
            return <div key={index}></div>;
          }
        })}
    </div>
  );
}

export default PlaceAreas;
