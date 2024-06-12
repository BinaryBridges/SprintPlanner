import{Paper} from "@mui/material";
import colors from "../../colors";

const TaskBox = () => {
    return (
        <Paper sx={{ backgroundColor: colors.incomplete, padding: 2, maxWidth: 150, textAlign:"center", borderRadius:5, color:colors.text}}>
            Make Task Box
        </Paper>
    )
}

export default TaskBox