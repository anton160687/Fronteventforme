import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/header/Search.module.scss';

function Search() {
    return (
        <>
            {/* Search visible on desktop */}
            <InputGroup size='sm' className='d-none d-lg-flex ps-2 ps-xxl-5'>
                <div className={styles.input__frame}>
                    <i className='fi-search position-absolute text-muted top-50 translate-middle-y ms-2'></i>
                    <input type='search' className={"border-top-0 border-start-0 border-end-0 border-bottom-0 rounded-0 form-control " + styles.input__field} placeholder='Поиск' />
                    <Button className={styles.input__btn}>Искать</Button>
                </div>
            </InputGroup>

            {/* Search visible on mobile */}
            <div className='d-lg-none bg-secondary border mx-n3 p-3 mt-3'>
                <InputGroup>
                    <div className={styles.input__frame}>
                        <i className='fi-search position-absolute text-muted top-50 translate-middle-y ps-1 ms-2'></i>
                        <FormControl type='search' className='border-top-0 border-start-0 border-end-0 border-bottom-0 rounded-0' placeholder='Поиск' />
                        <Button  className={styles.input__btn}>Искать</Button>
                    </div>
                </InputGroup>
            </div>
        </>
    )
}

export default Search;

