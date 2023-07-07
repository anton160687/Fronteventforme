import { ContextMenuTypeEnum } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { Dropdown } from 'react-bootstrap';

type ContextMenuType = {
  icon: string;
  title: string;
  value: string;
};

const publishedContextMenu: ContextMenuType[] = [
  { icon: 'fi-edit', title: 'Редактировать', value: 'edit' },
  { icon: 'fi-flame', title: 'Продвигать', value: 'promote' },
  { icon: 'fi-trash', title: 'Удалить', value: 'delete' },
];

const draftContextMenu: ContextMenuType[] = [
  { icon: 'fi-edit', title: 'Редактировать', value: 'edit' },
  { icon: 'fi-trash', title: 'Удалить', value: 'delete' },
];

const archiveContextMenu: ContextMenuType[] = [
  { icon: 'fi-refresh', title: 'Восстановить', value: 'restore' },
];

const moderateContextMenu: ContextMenuType[] = [
  { icon: 'fi-rotate-right', title: 'Отозвать заявку', value: 'revoke' },
];

type ContextMenuProps = {
  setShow: Dispatch<SetStateAction<boolean>>;
  contextMenu: string;
};

function ContextMenu({ setShow, contextMenu }: ContextMenuProps): JSX.Element {
  let menu: ContextMenuType[] = [];
  let declined: ContextMenuType[] = draftContextMenu;

  switch (contextMenu) {
    case ContextMenuTypeEnum.Published:
      menu = publishedContextMenu;
      break;
    case ContextMenuTypeEnum.Moderation:
      menu = moderateContextMenu;
      break;
    case ContextMenuTypeEnum.Declined:
      menu = draftContextMenu;
      break;
    case ContextMenuTypeEnum.Draft:
      menu = draftContextMenu;
      break;
    case ContextMenuTypeEnum.Archive:
      menu = archiveContextMenu;
      break;
  }

  //SelectCallback
  const handleSelect = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>
  ) => {
    console.log('eventKey', eventKey);

    if (eventKey === 'delete') {
      setShow(true);
    }
  };

  return (
    <div className="align-self-center ms-auto">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          size="sm"
          variant="light btn-icon rounded-circle shadow-sm"
        >
          <i className="fi-dots-vertical"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" className="pb-3">
          {menu.map((item, index) => (
            <Dropdown.Item key={index} eventKey={item.value}>
              <i className={`${item.icon} fs-lg opacity-60 me-2`}></i>
              {item.title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default ContextMenu;
