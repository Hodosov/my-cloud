import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { File } from "./File";
import { useSelector } from "react-redux";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles({
  table: {
    marginTop: 16,
  },
});

export const FileList = () => {
  const classes = useStyles();
  const files = useSelector((state) => state.files.files);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Название</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Размер</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <File file={file} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
