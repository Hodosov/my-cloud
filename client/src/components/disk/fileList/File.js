import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderIcon from "@material-ui/icons/Folder";
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrentDir } from "../../../reducers/fileReducer";

const useStyles = makeStyles(() => ({
  type: {
    width: "5%",
  },
  name: {
    width: "45%",
  },
  edit: {
    width: "10%",
  },
  size: {
    width: "20%",
  },
  date: {
    width: "10%",
  },
  none: {
    width: "10%",
  },
}));

export const File = ({ file }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)

  const openDirHandler = () => {
    dispatch(pushToStack(currentDir))
    dispatch(setCurrentDir(file._id))
  }

  return (
    <TableRow
      hover
      onClick={file.type === 'dir' ? () => openDirHandler() : ''}
      onMouseMove={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <TableCell align="center" className={classes.type}>
        {file.type === "dir" ? <FolderIcon /> : <InsertDriveFileIcon />}
      </TableCell>
      <TableCell align="left" className={classes.name}>
        {file.name}
      </TableCell>
      <TableCell align="right" className={classes.edit}>
        {show && "edit"}
      </TableCell>
      <TableCell align="right" className={classes.none}>
        {show && "delete"}
      </TableCell>
      <TableCell align="right" className={classes.date}>
        {file.date.slice(0, 10)}
      </TableCell>
      <TableCell align="right" className={classes.size}>
        {file.size}
      </TableCell>
    </TableRow>
  );
};
