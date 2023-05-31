import { FEATURES_DICTIONARY, TERRITORY } from '@/constant';
import { Feature } from '@/types/placeType';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

type TextHeadingFeaturesProps = {
  features: Feature[];
  max_serving: number;
  type_territory: number[];
};

export const TextHeadingFeatures = ({
  features,
  max_serving,
  type_territory,
}: TextHeadingFeaturesProps): JSX.Element => {
  //для красивого вывода данных - не вынесла в отдельный хелпер, т.к. тут в случае undefined возвращается пустая строка, а не "Не указано"
  const findFeatures = (dictionary: string[][], value: string): string => {
    const title = dictionary.find((item: string[]) => item[0] === value);

    if (title === undefined) return '';

    return title[1];
  };

  const findTerritory = (
    dictionary: [number, string][],
    array: number[]
  ): string[] => {
    const element: string[] = array.map((item: number) => {
      const title = dictionary.find((dEl: [number, string]) => dEl[0] === item);
      if (title === undefined) return '';
      else return title[1];
    });
    return element;
  };

  const [newTerritory, setTerritory] = useState<string[]>([]);
  const [newFeatures, setNewFeatures] = useState<string[]>([]);
  const [allFeatures, setAllFeatures] = useState<string[]>([]);
  const [serving, setServing] = useState<string>('');
  const [col1, setCol1] = useState<string[]>([]);
  const [col2, setCol2] = useState<string[]>([]);
  const [col3, setCol3] = useState<string[]>([]);

  useEffect(() => {
    if (type_territory.length)
      setTerritory(findTerritory(TERRITORY, type_territory));

    if (features.length)
      features.map((feature) => {
        setNewFeatures((prev) => [
          ...prev,
          findFeatures(FEATURES_DICTIONARY, feature.type_feature),
        ]);
      });

    if (max_serving)
      setServing(`1 официант обслуживает ${max_serving} человек`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const array = [...newFeatures, ...newTerritory];
    setAllFeatures([...array, serving]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newFeatures, newTerritory]);

  useEffect(() => {
    allFeatures.forEach((feature, index) => {
      if ((index + 1) % 3 === 0) setCol3((prev) => [...prev, feature]);
      else if ((index + 1) % 2 === 0) setCol2((prev) => [...prev, feature]);
      else setCol1((prev) => [...prev, feature]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFeatures]);

  return (
    <Row className="mb-xl-5 mb-4">
      <h4 className="text-center text-sm-start">Особенности</h4>

      <Row className="d-md-flex text-center text-sm-start d-block justify-content-between">
        {col1.length > 0 && (
          <ul className="list-unstyled w-auto mb-0">
            {col1.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
        {col2.length > 0 && (
          <ul className="list-unstyled w-auto mb-0">
            {col2.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
        {col3.length > 0 && (
          <ul className="list-unstyled w-auto mb-0">
            {col3.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
      </Row>
    </Row>
  );
};
