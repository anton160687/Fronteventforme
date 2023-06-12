import { ChangeEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '@/styles/catalog/Catalog.module.scss';
import { filterParamsType } from '@/types/filter';

type DropdownCBProps = {
  name: string;
  text: string;
  options: string[][];
  icon: string;
  filterParams: string[];
  setFilterParams: (name: string, value: string[]) => void;
};

function DropdownCB ({ name, text, options, icon, filterParams, setFilterParams}: DropdownCBProps) {
  const initialState: string[] = [];
  const [selectedArray, setSelectedArray] = useState(initialState);  

  useEffect(()=>{
    setSelectedArray(filterParams);
  }, [filterParams])

  const iconEl = icon ? (
    <i className={`${icon} fs-lg opacity-60 me-1`}></i>
  ) : (
    ''
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSelectedArray([...selectedArray, e.target.value]);
    } else {
      let i = selectedArray.indexOf(e.target.value);
      if (i >= 0) {
        let copyArray = [...selectedArray];
        copyArray.splice(i, 1);
        setSelectedArray(copyArray);
      }
    }
  }

  useEffect(() => {
    setFilterParams(name, selectedArray);
  }, [name, selectedArray]);

  function renderCB() {
    return options.map((option, i) => (
      <Form.Check
        key={i}
        type="checkbox"
        checked={!!(filterParams.find((e) => e === option[0]))}
        value={option[0]}
        label={option[1]}
        onChange={handleChange}
      />
    ));
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={selectedArray.length === 0? {color: "#454056"}:  {color: "#FE9589"}}
        variant="outline-secondary"
        className={`${styles.catalog__dropdown_icon} px-2`}
      >
        {iconEl}
        <p className={styles.catalog__dropdown_text}>{text}</p>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.catalog__dropdown_container}>
        {renderCB()}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownCB;
