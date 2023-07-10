import { Row } from 'react-bootstrap';
import { Feature } from '@/types/placeType';
import { FEATURES, TERRITORY } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';

type TextFeaturesProps = {
  features: Feature[];
  territories: number[];
  max_serving: number;
};

function TextFeatures({
  features,
  territories,
  max_serving,
}: TextFeaturesProps) {
  let featureListFirst: string[] = [];
  let featureListSecond: string[] = [];
  let featureListThird: string[] = [];
  let allFeatures: string[] = [];

  features.forEach(({ id }) => {
    let res = FEATURES.filter((value) => value[0] === id);
    let featureName = res.length !== 0 ? (res[0][1] as string) : '';
    allFeatures.push(featureName);
  });

  territories.forEach((item) => {
    let res = TERRITORY.filter((value) => value[0] === item);
    let territoryName = res.length !== 0 ? (res[0][1] as string) : '';
    allFeatures.push(territoryName);
  });

  if (max_serving)
    allFeatures.push(`1 официант обслуживает ${max_serving} человек`);

  const columnCount = 3; //кол-во столбцов
  const index = Math.round(allFeatures.length / columnCount);
  featureListFirst = allFeatures.slice(0, index);
  featureListSecond = allFeatures.slice(index, index * 2);
  featureListThird = allFeatures.slice(index * 2);

  function renderFeatures(featureList: string[]) {
    return featureList.map((feature, i) => <li key={i}> {feature} </li>);
  }

  return (
    <Row className={styles.mb40}>
      {featureListFirst.length > 0 && (
              <>
                  <h2 className='fs-4'>Особенности</h2>
          <Row className="d-flex justify-content-between">
            <ul className="list-unstyled w-auto mb-0">
              {renderFeatures(featureListFirst)}
            </ul>
            <ul className="list-unstyled w-auto mb-0">
              {renderFeatures(featureListSecond)}
            </ul>
            <ul className="list-unstyled w-auto mb-0">
              {renderFeatures(featureListThird)}
            </ul>
          </Row>
        </>
      )}
    </Row>
  );
}

export default TextFeatures;
