import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollLink from '@/components/_finder/ScrollLink';

function ProgressSideBar() {
  const anchors = [
    { to: 'basic-info', label: 'Базовая информация', completed: true },
    { to: 'location', label: 'Локация', completed: true },
    { to: 'descritrion', label: 'Описание площадки', completed: true },
    { to: 'photos', label: 'Фото площадки', completed: false },
    { to: 'area-1', label: 'Помещения', completed: false },
    { to: 'details', label: 'Детали площадки', completed: false },
    { to: 'price', label: 'Стоимость', completed: false },
    { to: 'wedding', label: 'Альбомы проведенных свабед', completed: false },
    { to: 'contacts', label: 'Контакты', completed: true },
  ];

  return (
    <div className="sticky-top pt-5">
      <h6 className="pt-5 mt-3 mb-2">65% профиля заполнено</h6>
      <ProgressBar
        variant="warning"
        now={65}
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
