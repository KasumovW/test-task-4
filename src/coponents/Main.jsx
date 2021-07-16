import React, { useState } from 'react';
import Modal from './modal/Modal';

function Main() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <div className='block-main'>
        <div className='block-title-head'>
          <div className='contacts-tile'>Контакты</div>
          <div className='add-contact' onClick={() => setModalActive(true)}> Добавить контакт</div>
        </div>
        <div className='scroll-bar'>
          <div className='d-flex'>
            <div className='block-contacts'>
              <div className='block-img-user'></div>
              <div className='head-block-data'>
                <div> <span>Имя:</span> John</div>
                <div> <span>id:</span> 1</div>
                <div><span>Текст:</span> Lorem ipsum dolor sit amet</div>
              </div>
              <div className='exit'>✖</div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='block-contacts'>
              <div className='block-img-user'></div>
              <div className='head-block-data'>
                <div> <span>Имя:</span> John</div>
                <div> <span>id:</span> 1</div>
                <div><span>Текст:</span> Lorem ipsum dolor sit amet</div>
              </div>
              <div className='exit'>✖</div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='block-contacts'>
              <div className='block-img-user'></div>
              <div className='head-block-data'>
                <div> <span>Имя:</span> John</div>
                <div> <span>id:</span> 1</div>
                <div><span>Текст:</span> Lorem ipsum dolor sit amet</div>
              </div>
              <div className='exit'>✖</div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='block-contacts'>
              <div className='block-img-user'></div>
              <div className='head-block-data'>
                <div> <span>Имя:</span> John</div>
                <div> <span>id:</span> 1</div>
                <div><span>Текст:</span> Lorem ipsum dolor sit amet</div>
              </div>
              <div className='exit'>✖</div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='block-contacts'>
              <div className='block-img-user'></div>
              <div className='head-block-data'>
                <div> <span>Имя:</span> John</div>
                <div> <span>id:</span> 1</div>
                <div><span>Текст:</span> Lorem ipsum dolor sit amet</div>
              </div>
              <div className='exit'>✖</div>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default Main;