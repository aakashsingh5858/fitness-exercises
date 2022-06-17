import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData} from '../utils/fetchData';


const ExerciseDetails = () => {
  return (
    <Box>
      <Detail />
      <ExercisesVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails