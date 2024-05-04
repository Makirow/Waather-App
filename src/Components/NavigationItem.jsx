import React from 'react';
import './NavigationItems.css';

function NavigationItem({nav}) {
  return (
     
     <li><a href= {nav.link}>{nav.name}</a></li>
    
  );
}

export default NavigationItem;