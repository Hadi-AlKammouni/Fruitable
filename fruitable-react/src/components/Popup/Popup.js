import React from 'react';
import Popup from 'reactjs-popup';
import './styles.css';

export default ({row,show}) => (
  <Popup
    trigger={<button className="button"> View Order </button>}
    modal
    nested
  >
    {close => (
        
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {row.length} </div>
        <div className="content">
          {' '}
            Hello World!
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
                show(false)
                close()}
            }
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);