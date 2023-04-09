import Link from "next/link";
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../_finder/ImageLoader';
import 'swiper/css';
import 'swiper/css/navigation';

const suppliers = [
    {
    // /job-board/catalog
        href: '#',
        image: '/img/suppliers/image1.jpg',
        name: 'person'
    },
    {
        href: '#',
        image: '/img/suppliers/image2.jpg',
        name: 'person'
    },
    {
        href: '#',
        image: '/img/suppliers/image3.jpg',
        name: 'person'
    },
    {
        href: '#',
        image: '/img/suppliers/image1.jpg',
        name: 'person'
    },
    {
        href: '#',
        image: '/img/suppliers/image2.jpg',
        name: 'person'
    },
    {
        href: '#',
        image: '/img/suppliers/image3.jpg',
        name: 'person'
    },
    {
        href: '#',
        image: '/img/suppliers/image1.jpg',
        name: 'person'
    }
]


function SupplierSlider(): JSX.Element {

    return (
        <Container as='section' className='pt-2 pt-sm-0 pb-md-2 mb-5'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                <h2 className='h3 mb-sm-0'>Лучшие исполнители</h2>
            </div>

            {/* Carousel */}
            <div className='position-relative'>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '#prev',
                        nextEl: '#next'
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        420: { slidesPerView: 1 },
                        700: { slidesPerView: 2 },
                        850: { slidesPerView: 3 },
                        1300: { slidesPerView: 4 }
                    }}
                    className='mx-n2'
                >
                    {suppliers.map((supplier, index) => (
                        <SwiperSlide key={index} className='h-auto' style={{padding: '.75rem .75rem 1rem .75rem'}}>
                            <Link href={supplier.href} className='position-relative text-center'>
                                <div className='rounded-3'>
                                    <div className='d-inline-block'>
                                        <ImageLoader src={supplier.image} width={306} height={400} alt={supplier.name} />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* External Prev/Next buttons */}
                <Button id='prev' variant='prev' className='d-none d-sm-block ms-2' />
                <Button id='next' variant='next' className='d-none d-sm-block me-2' />
            </div>
        </Container>

    )


}

export default SupplierSlider;