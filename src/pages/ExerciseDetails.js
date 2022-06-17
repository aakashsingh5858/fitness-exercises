import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  exercisesOptions,
  fetchData,
  youtubeOptions,
} from "../utils/fetchData";
import Deatail from "../components/Deatail";
import ExercisesVideos from "../components/ExercisesVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {
  const [exercisesDetail, setExercisesDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exercisesDetailData = await fetchData(
        `${exercisesDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );

      setExercisesDetail(exercisesDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exercisesDetailData.name}`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/target/${exercisesDetailData.target}`,
        exercisesOptions
      );

      setTargetMuscle(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`,
        exercisesOptions
      );

      setEquipment(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Deatail exercisesDetail={exercisesDetail} />
      <ExercisesVideos
        exerciseVideos={exerciseVideos}
        name={exercisesDetail.name}
      />
      <SimilarExercises targetMuscle={targetMuscle} equipment={equipment} />
    </Box>
  );
};

export default ExerciseDetails;
