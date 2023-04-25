import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

type DropdownCBProps = {
  text: string,
  options: string[],
  icon: string,
}

const DropdownCB = ({ text, options, icon }: DropdownCBProps) => {
  const [selected, setSelected] = useState('');
  const iconEl = icon ? <i className={`${icon} me-2`}></i> : ''

  // const handleSelect = (eventKey, e) => {
  //   setSelected(eventKey);
  // }

  function renderCB() {
    return options.map((option, i) => (
      <Dropdown.Item key={i} eventKey={option}>
        <Form.Check
          type='checkbox'
          label={option}
        />
      </Dropdown.Item>)
    )
  }


  return (
    // <Dropdown onSelect={handleSelect}>
    <Dropdown>
      <Dropdown.Toggle>
        {iconEl}
        {text}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {renderCB()}
        {/* {options.map((option, indx) => 
          <Dropdown.Item key={indx} eventKey={option[1]}>
            {option[0] && <i className={`${option[0]} fs-lg opacity-60 me-2`}></i>}
            {option[1]}
          </Dropdown.Item>)
        } */}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownCB
