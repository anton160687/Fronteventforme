import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Row, Form, Col, InputGroup } from 'react-bootstrap';

import DetailsTextarea from '../addProperty/detailsTextarea/DetailsTextarea';
import { ADD_PLACE_NAMES } from '@/constant';

type BusinessDetailsProps = {
    description: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function BusinessDetails({ description, handleChange }: BusinessDetailsProps) {
    return (
        <section
            id={ADD_PLACE_NAMES.detailsBusiness.id}
            className="card card-body border-0 shadow-sm p-4 mb-4"
        >
            <h2 className="h4 mb-4">
                <i className="fi-party-popper text-primary fs-5 mt-n1 me-2"></i>
                {ADD_PLACE_NAMES.detailsBusiness.name}
            </h2>
            <Row className="mb-4">
                <DetailsTextarea
                    details={description}
                    handleChange={handleChange}
                    name={'description'}
                    header={'Описание'}
                    placeholder={'Опишите детали своей работы. Например, бонусы, график и т.д'}
                    required
                />
            </Row>

        </section>
    );
}

export default BusinessDetails;
