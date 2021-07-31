import React, { useEffect, useState } from 'react';
import { Button, Dialog, TextField, DialogActions, DialogTitle, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  paper: {
    padding: 20
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ handleClose, createDirHandler}) {
const classes = useStyles()
const [dirName, setDirName] = useState('')
const popupDisplay = useSelector(state => state.files.popupDisplay)

  return (
      <Dialog
        open={popupDisplay}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose(setDirName)}
        classes={{
          paper: classes.paper
        }}
      >
        <DialogTitle>Создать новую папку</DialogTitle>
        <TextField
          fullWidth
          label="Введите название"
          variant="outlined"
          value={dirName}
          onChange={({target}) =>setDirName(target.value)}
        />
        <DialogActions>
          <Button onClick={() => createDirHandler(dirName, setDirName)} color="primary">
            Создать
          </Button>
          <Button onClick={() => handleClose(setDirName)} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
  );
}