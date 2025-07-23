'use client'
import React from 'react';
import { Box } from '@mui/material';
import IndiaMapSvg from '../../../public/image/India map.svg';

type StateName = 'Karnataka' | 'TamilNadu' | void; // Add more state names as needed

interface InteractiveIndiaMapProps {
  onStateClick: (state: StateName) => void;
}

const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({ onStateClick }) => {
  const handleMapClick = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const stateName = (event.target as SVGElement).getAttribute('data-state-name');
    if (stateName) {
      onStateClick(stateName as StateName);
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100%', textAlign: 'center' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        onClick={handleMapClick}
      >
        <image xlinkHref={IndiaMapSvg.src} width="100%" height="100%" />
        {/* Example: Adding data-state-name attribute to state paths */}
        <path data-state-name="Karnataka" d="../../../public/image/Karnataka (2).svg" />
        <path data-state-name="TamilNadu" d="../../../public/image/IN-TN (1).svg" />
        {/* Add more paths for each state with appropriate data-state-name */}
      </svg>
    </Box>
  );
};

export default InteractiveIndiaMap;
