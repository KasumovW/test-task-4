import React from 'react';
import './modal.css';

function Modal({ active, setActive }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
        <div>
          <div className='block-input-name'><input type="text" placeholder='Введите имя'/></div>
          <div className='block-input-title'><textarea placeholder='Введите текст'/></div>
        </div>
        <div className='add-content'>Добавить</div>
      </div>
    </div>
  );
}

export default Modal;