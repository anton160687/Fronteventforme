import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollLink from '@/components/_finder/ScrollLink';
import { Place } from '@/types/placeType';
import { ADD_PLACE_NAMES } from '@/constant';
import { Area } from '@/types/areaType';
import { Anchor } from '@/types/anchor';
import { addPlaceNameElement } from '@/types/addPlaceNames';

type ProgressSideBarProps = {
  place: Place;
  areas: Area[];
  setPercent: Dispatch<SetStateAction<number>>;
  percent: number;
  setIsFormFilled: Dispatch<SetStateAction<boolean>>;
};

const initialAnchors: Anchor[] = [
  {
    to: ADD_PLACE_NAMES.basic.id,
    label: ADD_PLACE_NAMES.basic.name,
    completed: false,
  },
  {
    to: ADD_PLACE_NAMES.location.id,
    label: ADD_PLACE_NAMES.location.name,
    completed: false,
  },
  {
    to: ADD_PLACE_NAMES.description.id,
    label: ADD_PLACE_NAMES.description.name,
    completed: false,
  },
  {
    to: ADD_PLACE_NAMES.mainPhotos.id,
    label: ADD_PLACE_NAMES.mainPhotos.name,
    completed: true,
  },
  {
    to: `${ADD_PLACE_NAMES.area.id}0`,
    label: ADD_PLACE_NAMES.area.name,
    completed: false,
  },
  {
    to: ADD_PLACE_NAMES.details.id,
    label: ADD_PLACE_NAMES.details.name,
    completed: false,
  },
  {
    to: ADD_PLACE_NAMES.weddingAlbum.id,
    label: ADD_PLACE_NAMES.weddingAlbum.name,
    completed: true,
  },
];

function ProgressSideBar({
  place,
  areas,
  percent,
  setPercent,
  setIsFormFilled,
}: ProgressSideBarProps) {
  const [anchors, setAnchors] = useState<Anchor[]>(initialAnchors);

  const calculatePercent = () => {
    setPercent(0);
    const step = Math.round(100 / anchors.length);

    anchors.map((anchor) => {
      if (anchor.completed) {
        setPercent((prev) => prev + step);
      }
    });
  };

  const findAnchor = (name: string) => {
    return anchors.findIndex((anchor) => anchor.label === name);
  };

  const changeAnchor = (element: addPlaceNameElement, isCompleted: boolean) => {
    const index = findAnchor(element.name);

    setAnchors((prev) => [
      ...prev.slice(0, index),
      {
        ...prev[index],
        completed: isCompleted,
      },
      ...prev.slice(index + 1),
    ]);
  };

  const isCompleted = () => {
    //Базовая информация
    if (place.title) {
      changeAnchor(ADD_PLACE_NAMES.basic, true);
    }
    if (!place.title) {
      changeAnchor(ADD_PLACE_NAMES.basic, false);
    }

    //Локация
    if (place.city && place.address && place.ya_id) {
      changeAnchor(ADD_PLACE_NAMES.location, true);
    }
    if (!(place.city && place.address && place.ya_id)) {
      changeAnchor(ADD_PLACE_NAMES.location, false);
    }

    //Описание площадки
    if (
      place.location.length &&
      place.kitchen.length &&
      place.start_time &&
      place.finish_time &&
      place.average_check &&
      place.event.length
    ) {
      changeAnchor(ADD_PLACE_NAMES.description, true);
    }
    if (
      !(
        place.location.length &&
        place.kitchen.length &&
        place.start_time &&
        place.finish_time &&
        place.average_check &&
        place.event.length
      )
    ) {
      changeAnchor(ADD_PLACE_NAMES.description, false);
    }

    //Фото площадки
    //TODO

    //Помещения
    let areasFilledCount = 0;
    areas.map((area) => {
      if (
        area.title &&
        area.type_area &&
        area.min_capacity &&
        area.max_capacity &&
        area.color_hall &&
        area.min_price_banquet &&
        area.min_price_rent &&
        area.deposit &&
        area.scheme_of_payment &&
        area.detail_location
      ) {
        areasFilledCount++;
      }
    });
    if (areasFilledCount === areas.length && areas.length) {
      changeAnchor(ADD_PLACE_NAMES.area, true);
    }
    if (!(areasFilledCount === areas.length && areas.length)) {
      changeAnchor(ADD_PLACE_NAMES.area, false);
    }

    //Детали площадки
    if (
      place.description &&
      place.features.length &&
      place.max_serving &&
      place.outreg_price &&
      place.outreg_desc
    ) {
      changeAnchor(ADD_PLACE_NAMES.details, true);
    }
    if (
      !(
        place.description &&
        place.features.length &&
        place.max_serving &&
        place.outreg_price &&
        place.outreg_desc
      )
    ) {
      changeAnchor(ADD_PLACE_NAMES.details, false);
    }

    //Альбомы проведенных свадеб
    //TODO
  };

  useEffect(() => {
    isCompleted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place, areas]);

  useEffect(() => {
    calculatePercent();

    let completedCount = 0;
    anchors.map((anchor) => {
      if (anchor.completed) {
        completedCount++;
      }
    });

    if (completedCount === anchors.length) {
      setPercent(100);
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchors]);

  console.log('anchors', anchors);

  return (
    <div className="sticky-top pt-5">
      <h6 className="pt-5 mt-3 mb-2">{percent}% профиля заполнено</h6>
      <ProgressBar
        variant="warning"
        now={percent}
        style={{ height: '.25rem' }}
        className="mb-4"
      />
      <ul className="list-unstyled">
        {anchors.map((anchor, indx) => (
          <li key={indx} className="d-flex align-items-center  btn-link">
            <i
              className={`fi-check text-${
                anchor.completed ? 'primary' : 'muted'
              } me-2`}
            ></i>
            <ScrollLink
              to={anchor.to}
              smooth="easeInOutQuart"
              duration={600}
              offset={-95}
              className="nav-link fw-normal ps-1 p-0"
            >
              {anchor.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressSideBar;
