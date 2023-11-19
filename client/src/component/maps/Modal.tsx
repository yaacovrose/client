import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ShopMap from './openLayers';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // function setDialogText(name: any): React.ReactNode {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div>
          <Button onClick={handleOpen} style={{ width: '78px', height: '78px' }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKYIhokQapnFpH3RBhbJFHixMfRN9t9QXxw&usqp=CAU"
        alt="Marker"
        width="100%"
        height="100%"
      />
    </Button>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{ flex: 1, marginLeft: "10px" }}
      >
        <Box sx={{ ...style, width: 400 }}>
            <ShopMap/>
        </Box>
      </Modal>
    </div>
  );
}
