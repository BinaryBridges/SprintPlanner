import { Box} from "@mui/material";
import TopBar from "../../components/top-bar/TopBar";
import TaskBox from "../../components/task-box/TaskBox";
import SprintBox from "../../components/sprint-box/SprintBox";
import colors from "../../colors";


const SprintTracker = () => {
    return (
    <Box sx={{width: '100vw'}}>
        <TopBar />
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 64px)', // Subtract the height of the AppBar
            }}
        >
            <Box sx={{ flex: '60%', bgcolor: 'lightblue'}}>
                <SprintBox />
            </Box>
            <Box sx={{ flex: '40%', bgcolor: colors.background}}>
                <TaskBox></TaskBox>
            </Box>
        </Box>
    </Box>
    )
}

export default SprintTracker;