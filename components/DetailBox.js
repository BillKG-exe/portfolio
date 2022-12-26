import { useState } from 'react';
import { GrClose } from 'react-icons/gr';


const DetailBox = ({content}) => {
    const [clicked, setClicked] = useState(false);

    const showPopup = () => { setClicked(true); }

    const closePopup = () => { setClicked(false); }
    /* { title, description, date, gave, learned } */

    return (
        <>
            {
                !clicked? (
                    <div className="detail-box-container" onClick={showPopup}>
                        <div className='detail-title'>{content.title}</div>
                        <div className='sample-desc'>{content.description}</div>
                    </div>
                ) : (
                    <div className='detail-popup'>
                        <div className='detail-popup-container'>
                            <div className='detail-popup-box'>
                                <div className='popup-header'>
                                    <div className='title'>{content.title}</div>
                                    <div className='close-icon' onClick={closePopup}><GrClose /></div>
                                </div>
                                <section className='desc'>
                                    <div className='title'>Description</div>
                                    <div className='text'>{content.description}</div>
                                </section>
                                <section className='desc'>
                                    <div className='title'>What I did</div>
                                    <ul className='text'>
                                        {
                                            content.gave.map((list, index) => (
                                                <li key={index * 4}>{list}</li>
                                            ))
                                        }
                                    </ul>
                                </section>
                                <section className='desc'>
                                    <div className='title'>What I learned</div>
                                    <ul className='text'>
                                        {
                                            content.learned.map((list, index) => (
                                                <li key={index * 5}>{list}</li>
                                            ))
                                        }
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
 
export default DetailBox;