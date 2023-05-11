import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../Utils/fetchData";
function SearchExercises() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([])
  const [bodyParts,setBodyParts]=useState([])


useEffect(()=>{
 const fetchExerciseData=async ()=>{
  const bodyPartsData=await fetchData(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    exerciseOptions)

    setBodyParts(["all", ...bodyPartsData])
 }
 fetchExerciseData()
},
[])



  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("")
      setExercises(searchedExercises)
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            bakgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
          }}
          placeholder="seach Exercises"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="Search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box
      sx={{
        position:"relative",
        width:"100%",
        p:"20px"
 
      }}
      >
<HorizontalScrollbar
data={bodyParts}
/>

      </Box>
    </Stack>
  );
}

export default SearchExercises;
