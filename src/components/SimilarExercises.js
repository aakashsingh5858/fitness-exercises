import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import HorzontalScrollbar from "../components/HorizontalScrollbar"
import LoaderComponent from './Loader';

const SimilarExercises = ({targetMuscle, equipment}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
        <Typography variant='h3' mb={5}>
            Exercises that target the same muscle group
        </Typography>
        <Stack direction={'row'} sx={{p:'2', position:'relative'}}>
            {targetMuscle.length ? <HorzontalScrollbar data={targetMuscle}/> : <LoaderComponent />
            }
        </Stack>
        <Typography variant='h3' mb={5} mt={5}>
            Exercises that equipment the same muscle group
        </Typography>
        <Stack direction={'row'} sx={{p:'2', position:'relative'}}>
            {equipment.length ? <HorzontalScrollbar data={equipment}/> : <LoaderComponent />
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises