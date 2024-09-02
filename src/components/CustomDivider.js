import * as React from 'react';
import { Box } from '@mui/material';

function CustomDivider() {
  return (
    <Box 
      sx={{ 
        width: "10%", 
        marginBottom: "20px",
        borderBottom: "2px solid #AB0C18", 
        fontWeight: "bold" 
      }}
    />
  );
}

export default CustomDivider;
