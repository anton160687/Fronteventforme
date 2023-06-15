import { useRef, useState, MouseEvent, useEffect, ChangeEvent } from "react";
import { ADD_PLACE_NAMES, SUG_URL, TOKEN } from "@/constant";
import { Col, Form } from "react-bootstrap";
import { DaDataValue, DaDataValues, Nullable } from "@/types/dadata";
import useOutsideClick from "@/hooks/useOutsideClick";
import styles from '@/styles/addbusiness/AddBusiness.module.scss';

type CityFormProps = {
  city: string;
  setCity: (city: string) => void;
}

function CityForm({ city, setCity }: CityFormProps) {
  console.log(city);

  const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
  const [error, setError] = useState<string>('');
  const dropDownRef = useRef(null);
  const [openDropDown, setOpenDropdown] = useState<boolean>(false);
    useOutsideClick(dropDownRef, handleOutsideClick, openDropDown);
  
  let apiToken = (process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_DADATA : TOKEN);
  useEffect(() => {
    async function fetchAdress(query: string) {
      let data = { "query": query };
      let response = await fetch(SUG_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + apiToken
        },
        body: JSON.stringify(data),
      })
      let result: DaDataValues = await response.json();
      setSuggestions(result.suggestions);
    }
    fetchAdress(city);
  }, [city])

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
    setOpenDropdown(true);
  }

  function handleClick(e: MouseEvent<HTMLParagraphElement>, city: Nullable<string>) {
    let input = e.target as HTMLElement;
    if (city) {
      setCity(city);
    }
    setOpenDropdown(false);
  }

  function handleOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
    setOpenDropdown(false);
    setSuggestions(undefined);
  }

  function renderClues(suggestions: DaDataValue[]) {
    return suggestions.map((suggestion, i) => (
      <p key={i} onClick={(e) => handleClick(e, suggestion.data.city)}> {suggestion.data.city} </ p>
    ))
  }

  return (
    <section id={ADD_PLACE_NAMES.location.id} className="card card-body border-0 shadow-sm p-4 mb-4">
      <h2 className="h4 mb-4">
        <i className="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.location.name}
      </h2>
      <Form.Group as={Col} sm={12} controlId="ap-address">
        <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
          Город <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          value={city}
          name="city"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div>
      {openDropDown && suggestions &&
        <div ref={dropDownRef} className={styles.city__dropdown}>
          {renderClues(suggestions)}
        </div>
      }
      </div>
    </section>
  )
}

export default CityForm;