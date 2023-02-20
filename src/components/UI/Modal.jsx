// import { Box } from '@mui/material'
// import React from 'react'
// import styled from 'styled-components'
// import {Modal as MuiModal} from "@mui/material"

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// const Modal = ({openHandler, closeHandler, open, children}) => {

  

//   return (
//          <>
//          <button onClick={openHandler}>Open Modal</button>
//       <MuiModal
//         open={open}
//         onClose={closeHandler}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{width: 400 }}>
//          {children}
//           <button onClick={closeHandler}>Clode Modal</button>
//           {style}
//         </Box>
//       </MuiModal>
//          </>
//   )
// }

// export default Modal;

// const StyledBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 20;
//   background-color: rgba(0, 0, 0, 0.75);

//  position: fixed;
// top: 20vh;
// left: 5%;
// width: 90%;
// background-color: white;
// padding: 1rem;
// border-radius: 14px;
// box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
// z-index: 30;
// animation: slide-down 300ms ease-out forwards;
// width: 40rem;
// left: calc(50% - 20rem);

// @keyframes slide-down {
//   from {
//     opacity: 0;
//     transform: translateY(-3rem);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// `