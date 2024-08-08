
import React, { useState } from 'react';
import '../styles/Tooltip.css'
const Tooltip =({ text, children})=>{
  const [visible, setVisible] =useState(false);
  const showTooltip =()=>setVisible(true);
  const hideTooltip =()=>setVisible(false);
  return (
    <h2 className='tooltip' onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <div>
        {children}
        {visible && <div className="tooltiptext">{text}</div>}
      </div>
    </h2>
  );
}
export default Tooltip;