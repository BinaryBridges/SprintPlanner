import { Stack, Paper, Typography, Box } from "@mui/material";
import colors from "../../colors";
import TaskBox from "../task-box/TaskBox";


const SprintBox = ({sprintNumber, tasks}) => {

    console.log(tasks)

    return (
        <Paper sx={{display: "flex", minWidth:300, margin: 3, textAlign: "center", marginBottom: 3, flexDirection: "column", maxHeight: 475, height: 1}}>
            <Box sx={{width: "100%", marginTop: 3}}>
                <Typography color={colors.text} fontSize={20}>Sprint {sprintNumber}</Typography>
            </Box>
            <Box sx={{overflow: "scroll", overflow: "auto", padding: 3}}>
            <Stack direction="column" spacing={1} sx={{textAlign: "center", width: "100%"}}>
            
                {tasks.map((values) => (
                    <TaskBox />
                ))

                }
            </Stack>
            </Box>
            
        </Paper>
    )
}

export default SprintBox