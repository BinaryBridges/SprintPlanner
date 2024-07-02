import React from 'react';
import { DialogContent, DialogContentText, Paper, FormControl, Select, MenuItem, Button } from "@mui/material";
import colors from "../../colors";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const TaskBox = ({ task, onDragStart }) => {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState('');

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSetProgress = (event) => setProgress(event.target.value);

  const handleDragStartInternal = (e) => {
    onDragStart(task);
    if (e.dataTransfer) {
      e.dataTransfer.setData("text/plain", JSON.stringify(task));
    }
  };

  return (
    <>
      <Paper
        draggable
        onDragStart={handleDragStartInternal}
        onClick={handleClickOpen}
        sx={{
          backgroundColor: colors.incomplete,
          padding: 2,
          width: 150,
          height: 50,
          textAlign: "center",
          borderRadius: 5,
          cursor: 'move',
          margin: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {task && task.title ? task.title : "Unnamed Task"}
      </Paper>
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
  );
};

export default TaskBox;