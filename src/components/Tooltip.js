
import React, { useState } from 'react';
import '../styles/Tooltip.css'
const Tooltip =({ text1,text2, children})=>{
  const [visible, setVisible] =useState(false);
  const showTooltip =()=>setVisible(true);
  const hideTooltip =()=>setVisible(false);
  return (
    <div className='tooltip' onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
        {visible && <div className="tooltiptext"><h2>{text1}</h2></div>}
        {visible && <div className="tooltiptext"><p>{text2}</p></div>}
    </div>
  );
}
export default Tooltip;