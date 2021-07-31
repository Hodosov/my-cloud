import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { getFiles, createDir } from "../../actions/file";
import {FileList} from './fileList/FileList'
import Popup from './Popup'
import { setCurrentDir, setPopup } from "../../reducers/fileReducer";

export const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir, dispatch]);

  const createDirHandler = (dirName, setDirName) => {
    if(dirName.trim() !== '') {
      dispatch(createDir(currentDir, dirName))
      handleClose()
      setDirName('')
    }
  }
  const handleClickOpen = () => {
    dispatch(setPopup(true))
  };

  const handleClose = (setDirName) => {
    dispatch(setPopup(false))
  };

  const backClickHandler = () => {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Button onClick={() => backClickHandler()}>Назад</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => handleClickOpen()}> Создать папу</Button>
        </Grid>
      </Grid>
      <FileList />
      <Popup handleClose={handleClose} createDirHandler={createDirHandler}/>
    </>
  );
};
