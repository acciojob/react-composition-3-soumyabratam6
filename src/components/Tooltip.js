
import React, { useState } from 'react';
import '../styles/Tooltip.css'
const Tooltip =({ text, children})=>{
  const [visible, setVisible] =useState(false);
  const showTooltip =()=>setVisible(true);
  const hideTooltip =()=>setVisible(false);
  return (
    <div className='tooltip' onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <div>
        {children}
        {visible && <div className="tooltiptext">{text}</div>}
      </div>
    </div>
  );
}
export default Tooltip;