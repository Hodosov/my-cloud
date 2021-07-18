import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { getFiles } from "../../actions/file";
import {FileList} from './fileList/FileList'

export const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  
  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Button>Назад</Button>
        </Grid>
        <Grid item>
          <Button> Создать папу</Button>
        </Grid>
      </Grid>
      <FileList />
    </>
  );
};
