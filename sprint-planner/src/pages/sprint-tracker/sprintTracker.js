import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import TopBar from "../../components/top-bar/TopBar";
import SprintBox from "../../components/sprint-box/SprintBox";
import colors from "../../colors";
import { data } from "../../mockData";

const SprintTracker = () => {
  const [sprints, setSprints] = useState(data.sprints);
  const [draggingTask, setDraggingTask] = useState(null);
  const [draggingSprintIndex, setDraggingSprintIndex] = useState(null);

  const handleDragStart = (task, sprintIndex) => {
    setDraggingTask(task);
    setDraggingSprintIndex(sprintIndex);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (sprintIndex) => {
    if (draggingTask !== null && draggingSprintIndex !== null) {
      const updatedSprints = [...sprints];

      updatedSprints[draggingSprintIndex].tasks = updatedSprints[draggingSprintIndex].tasks.filter(
        (task) => task.title !== draggingTask.title
      );

      if (!updatedSprints[sprintIndex].tasks.some(task => task.title === draggingTask.title)) {
        updatedSprints[sprintIndex].tasks.push(draggingTask);
      }

      setSprints(updatedSprints);
      setDraggingTask(null);
      setDraggingSprintIndex(null);
    }
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <TopBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 64px)",
        }}
      >
        <Box sx={{ flex: 0.6, bgcolor: "lightblue", overflow: "auto" }}>
          <Stack direction="row" alignItems="flex-start">
            {sprints.slice(1).map((sprint, index) => (
              <SprintBox
                key={index}
                sprintTitle={sprint.title}
                tasks={sprint.tasks}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index + 1)}
                onDragStart={(task) => handleDragStart(task, index + 1)}
              />
            ))}
          </Stack>
        </Box>
        <Box
          sx={{ 
            flex: 0.4, 
            bgcolor: colors.background, 
            overflow: "auto" 
          }}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(0)}
        >
          <SprintBox
            sprintTitle={sprints[0].title}
            tasks={sprints[0].tasks}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(0)}
            onDragStart={(task) => handleDragStart(task, 0)}
            isUnassigned={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SprintTracker;