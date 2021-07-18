import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles(() => ({}));

export const File = ({ file }) => {
  const classes = useStyles();
  return (
    <TableRow hover>
      <TableCell align="center" scope="row">
        {file.type === "dir" ? <FolderIcon /> : <InsertDriveFileIcon />}
      </TableCell>
      <TableCell align="left">{file.name}</TableCell>
      <TableCell align="right"></TableCell>
      <TableCell align="right"></TableCell>
      <TableCell align="right">{file.date.slice(0, 10)}</TableCell>
      <TableCell align="right">{file.size}</TableCell>
    </TableRow>
  );
};
