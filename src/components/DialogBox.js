import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  return (
    <div>
      <Dialog
        open={props.openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.closeDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Status Cannot Be Changed !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            To Change Status of this Button , Please Go to Configuration tab and remove auto control check .! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={props.closeDialog} color="primary">
            Disagree
          </Button> */}
          <Button onClick={props.closeDialog} variant="contained" color="primary" disableElevation>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
