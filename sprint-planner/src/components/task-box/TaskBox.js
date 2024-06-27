import * as React from 'react';
import { DialogContent, DialogContentText, Paper, FormControl, Select, MenuItem, Button } from "@mui/material";
import colors from "../../colors";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';

const TaskBox = () => {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState('');
  const [dragging, setDragging] = React.useState(false);
  const [startPosition, setStartPosition] = React.useState({ x: 0, y: 0 });
  const dragThreshold = 5;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetProgress = (event) => {
    setProgress(event.target.value);
  };

  const handleDragStart = (e) => {
    setStartPosition({ x: e.clientX, y: e.clientY });
    setDragging(false);
  };

  const handleDrag = (e) => {
    const distance = Math.sqrt(Math.pow(e.clientX - startPosition.x, 2) + Math.pow(e.clientY - startPosition.y, 2));
    if (distance > dragThreshold) {
      setDragging(true);
    }
  };

  const handleDragStop = (e) => {
    const distance = Math.sqrt(Math.pow(e.clientX - startPosition.x, 2) + Math.pow(e.clientY - startPosition.y, 2));
    if (distance <= dragThreshold && !dragging) {
      handleClickOpen();
    }
  };

  return (
    <>
      <Draggable
        onStart={handleDragStart}
        onDrag={handleDrag}
        onStop={handleDragStop}
      >
        <Paper sx={{ backgroundColor: colors.incomplete, padding: 2, width: 150, textAlign: "center", borderRadius: 5, cursor: 'move' }}>
          Task Box
        </Paper>
      </Draggable>
      <Dialog sx={{ padding: 2, textAlign: "center" }} open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle sx={{ backgroundColor: colors.background }}>Task Title</DialogTitle>
        <DialogContent sx={{ backgroundColor: colors.background }}>
            <DialogContentText sx={{ backgroundColor: colors.background }}>Sprint</DialogContentText>
            <DialogContentText sx={{ backgroundColor: colors.background }}>Description</DialogContentText>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select value={progress} onChange={handleSetProgress} displayEmpty>
                <MenuItem value="">Not Started</MenuItem>
                <MenuItem value="inProgress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
            <Button variant="outlined" onClick={handleClose}>Save</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TaskBox;