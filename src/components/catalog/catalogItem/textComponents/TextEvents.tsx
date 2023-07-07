import { Row } from 'react-bootstrap';
import { Event } from '@/types/placeType';
import { EVENT } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';

type TextEventProps = {
  events: Event[];
};

function TextEvents({ events }: TextEventProps) {
  let eventListFirst: string[] = [];
  let eventListSecond: string[] = [];
  let eventListThird: string[] = [];
  const elInLine = 5;

  events.forEach(({ id }) => {
    let res = EVENT.filter((value) => value[0] === id);
    let eventName = res.length !== 0 ? (res[0][1] as string) : '';

    if (events.length < elInLine) {
      eventListFirst.push(eventName);
    } else if (eventListFirst.length < 3) {
      eventListFirst.push(eventName);
    } else if (eventListSecond.length < 3) {
      eventListSecond.push(eventName);
    } else {
      eventListThird.push(eventName);
    }
  });

  function getIcon(event: string) {
    switch (event) {
      case 'Свадьба':
        return 'fi-friends';
      case 'День рождения':
        return 'fi-friends';
      case 'Новый год':
        return 'fi-bell';
      case 'Фуршет':
        return 'fi-glass';
      case 'Мальчишник':
        return 'fi-man';
      case 'Девичник':
        return 'fi-woman';
      case 'Выпускной':
        return 'fi-party-popper';
      case 'Корпоратив':
        return 'fi-briefcase';
      case 'Праздничный банкет':
        return 'fi-cake';
      default:
        return '';
    }
  }

  function renderEvents(eventList: string[], isLine: boolean = false) {
    return eventList.map((event, i) => (
      <li
        key={i}
        className={`${isLine ? 'd-inline' : ''} text-nowrap ${
          i > 0 && i < eventList.length - 1 ? 'ms-sm-3 ms-md-0' : ''
        }`}
      >
        <i className={`${getIcon(event)} me-2 fs-sm`} />
        {event}
      </li>
    ));
  }

  return (
    <Row className={styles.mb40}>
      {events.length > 0 && (
        <>
          <h4>Подходит для:</h4>

          {events.length < elInLine ? (
            <ul className="flex-column flex-sm-row d-flex flex-wrap justify-content-between list-unstyled w-100">
              {renderEvents(eventListFirst, true)}
            </ul>
          ) : (
            <Row className="d-flex justify-content-between">
              <ul className="list-unstyled w-auto">
                {renderEvents(eventListFirst)}
              </ul>
              <ul className="list-unstyled w-auto">
                {renderEvents(eventListSecond)}
              </ul>
              <ul className="list-unstyled w-auto">
                {renderEvents(eventListThird)}
              </ul>
            </Row>
          )}
        </>
      )}
    </Row>
  );
}

export default TextEvents;
