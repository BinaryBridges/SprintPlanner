import * as React from 'react';
import{DialogContent, Paper} from "@mui/material";
import colors from "../../colors";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const TaskBox = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <>
        <Paper sx={{ backgroundColor: colors.incomplete, padding: 2, width: 150, textAlign:"center", borderRadius:5}} onClick={handleClickOpen}>
            Make Task Box
        </Paper>
        <Dialog sx={{padding: 2, textAlign:"center"}}
        open={open}
        onClose={handleClose}
        fullWidth={true}
        >
        <DialogTitle sx={{ backgroundColor: colors.background}}>Kendrick VS Drake</DialogTitle>
        <DialogContent sx={{ backgroundColor: colors.background}}></DialogContent>
        </Dialog>
        </>
    )

}

export default TaskBox