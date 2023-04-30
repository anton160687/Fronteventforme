import { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ScrollLink from '@/components/_finder/ScrollLink';


function ProgressSideBar() {
    // Anchor lnks
    const anchors = [
        { to: 'basic-info', label: 'Basic info', completed: true },
        { to: 'location', label: 'Location', completed: true },
        { to: 'details', label: 'Property details', completed: true },
        { to: 'price', label: 'Price range', completed: false },
        { to: 'photos', label: 'Photos / video', completed: false },
        { to: 'contacts', label: 'Contacts', completed: true }
    ]

    return (
        <div className='sticky-top pt-5'>
            <h6 className='pt-5 mt-3 mb-2'>65% content filled</h6>
            <ProgressBar variant='warning' now={65} style={{ height: '.25rem' }} className='mb-4' />
            <ul className='list-unstyled'>
                {anchors.map((anchor, indx) => (
                    <li key={indx} className='d-flex align-items-center'>
                        <i className={`fi-check text-${anchor.completed ? 'primary' : 'muted'} me-2`}></i>
                        <ScrollLink to={anchor.to} smooth='easeInOutQuart' duration={600} offset={-95} className='nav-link fw-normal ps-1 p-0'>
                            {anchor.label}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProgressSideBar;