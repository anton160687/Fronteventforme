import { ChangeEvent, MouseEvent, useState } from 'react';
import { FormCheck } from 'react-bootstrap';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles } from '@/constant';
import withAuth from '@/hoc/withAuth';
import { Dispatch, SetStateAction } from 'react';

const switches = [
  {
    id: '01',
    name: 'rentNew',
    title: 'Рассылка новостей',
    description: 'New rentals that match your Wishlist',
  },
  {
    id: '02',
    name: 'rentUpdate',
    title: 'Новые свадебные статьи в блоге',
    description:
      'Updates like price changes and off-market status on your Wishlist',
  },
  {
    id: '03',
    name: 'recomendations',
    title: 'Бронирование площадки другим человеком',
    description:
      "Properties for rent / sale we think you'll like. These recommendations may be slightly outside your search criteria",
  },
  {
    id: '04',
    name: 'featuredNews',
    title: 'Новые личные сообщения на портале',
    description: 'News and tips you may be interested in',
  },
  {
    id: '05',
    name: 'extras',
    title: 'Новые промокоды и специальные акции',
    description:
      'Occasional notifications about new features to make finding the perfect property easy',
  },
];

type NotificationSettingPageProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

function NotificationSettingPage({ setIsShown }: NotificationSettingPageProps) {
  function renderSwitches() {
    return switches.slice(1).map(({ id, name, title, description }) => (
      <FormCheck
        key={id}
        type="switch"
        id={id}
        className="d-flex justify-content-between ps-0 mb-4"
      >
        <FormCheck.Label className="me-2">
          <span className="h6 mb-1">{title}</span>
          <br />
          <span className="fs-sm mb-0">{description}</span>
        </FormCheck.Label>
        <FormCheck.Input
          name={name}
          checked={isCheck.includes(id)}
          onChange={handleSelect}
          className="flex-shrink-0"
        />
      </FormCheck>
    ));
  }

  // const [isCheckAll, setIsCheckAll] = useState(true);
  const [isCheck, setIsCheck] = useState<string[]>(['01', '02', '04']);

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  }

  function handleDeletetAll(e: MouseEvent<HTMLDivElement>) {
    setIsCheck([]);
  }
  // function handleSelectAll(e: ChangeEvent<HTMLInputElement>) {
  //   setIsCheckAll(!isCheckAll);
  //   setIsCheck(switches.map(item => item.id));
  //   if (isCheckAll) {
  //     setIsCheck([])
  //   }
  // }

  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Notification}
      setIsShown={setIsShown}
    >
      <>
        <p className="pt-1 mb-4">
          Получайте уведомления о новостях и событиях портала
        </p>
        <div className="py-2">
          <div className="border-top pt-4 border-bottom pb-4">
            <FormCheck
              key={switches[0].id}
              type="switch"
              id={switches[0].id}
              className="d-flex justify-content-between ps-0"
            >
              <FormCheck.Label className="me-2">
                <span className="h6 mb-1">{switches[0].title}</span>
                <br />
                <span className="fs-sm mb-0">{switches[0].description}</span>
              </FormCheck.Label>
              <FormCheck.Input
                name={switches[0].name}
                checked={isCheck.includes(switches[0].id)}
                onChange={handleSelect}
                className="flex-shrink-0"
              />
            </FormCheck>
          </div>

          <div className="mb-4 mt-4">
            <h6 className="mb-1">О чем вы хотите получать уведомления?</h6>
            <p className="fs-sm mb-0">New rentals that match your Wishlist</p>
          </div>
          {renderSwitches()}
        </div>
        <div
          className="d-flex align-items-center border-top pt-4"
          onClick={handleDeletetAll}
        >
          <i className="fi-x-circle" />
          <p className="fs-sm m-1 mt-0 mb-0">Отписаться от всех уведомлений</p>
        </div>
      </>
    </LKNavigation>
  );
}

export default withAuth(NotificationSettingPage);
