import React from 'react';

import { HiddenToggle } from './generic';

// popup message
const Popup = props =>
  <HiddenToggle show={props.show}>
    <div className="Popup" onContextMenu={e => e.preventDefault()}>
      <div className="Popup-inner">
        <p>{props.text}</p>
        
        {props.text === 'Winner!' ?
          <div className="Popup-score">
            <p>
              Difficulty: {props.score} | Time: {props.time}
            </p>
            {props.time < 5 ? null
            : <form onSubmit={e => props.submitHiscore(e)}>
                <input autoFocus className="Popup-name" type="text" placeholder="Name" />
                <input className="Popup-submit" type="submit" value="Submit" />
              </form>
            }
          </div>
        : null}
        
        <button className="close" onClick={props.closePopup}>Back</button>
      </div>
    </div>
  </HiddenToggle>;

export default Popup;