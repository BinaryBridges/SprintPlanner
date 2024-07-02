import React from "react";
import { Stack, Paper, Typography, Box } from "@mui/material";
import colors from "../../colors";
import TaskBox from "../task-box/TaskBox";

const SprintBox = ({ sprintTitle, tasks, onDragOver, onDrop, onDragStart, isUnassigned }) => {
  return (
    <Paper
      sx={{
        minWidth: 300,
        margin: 3,
        textAlign: "center",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      onDragOver={onDragOver}
      onDrop={onDrop}
      elevation={0}
    >
      <Box sx={{ marginTop: 3 }}>
        <Typography color={colors.text} fontSize={22}>
          {sprintTitle}
        </Typography>
      </Box>
      <Box sx={{ overflow: "auto", padding: 3, maxHeight: 300 }}>
        <Stack 
          direction={isUnassigned ? "row" : "column"} 
          spacing={1}
          alignItems={isUnassigned ? "flex-start" : "center"}
        >
          {tasks.map((task, index) => (
            <TaskBox key={index} task={task} onDragStart={onDragStart} />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default SprintBox;