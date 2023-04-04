import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MovieItems from "../Movies/MovieItems";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api-helper/api-helpers";

const Homepage = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setmovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width="70%" height={"60vh"} padding={2}>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv2z2jQRyI1fI8OnM4lInO_YW5nNSHHosiM79K2rF4RpO76RA6ss8yTUeGJr7Yx_cZxW63NYU4H0qt9Ohe-jATnfmC4NjyaGSESzVJxIElic-6dUrjTCDzkHjeNuckRy-uxiJdngFet3ibwVCTn3mD0uK9gWRmNdslKPM1J5lTXp3V9Z2R3EPmvA/s1280/E3B30680-59E6-4184-A5C6-4AB7903F2FBB.jpeg"
          alt="Tu Jhoothi Main Makkar"
          width={"100%"}
          height={"100%"}
        />
      </Box>

      {/* Typhography for the text */}

      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Realse
        </Typography>
      </Box>

      <Box
        display={"flex"}
        margin="auto"
        width="80%"
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {movies.map((item, index) => (
          <MovieItems
            id={item.id}
            title={item.title}
            posterUrl={item.posterUrl}
            releaseDate={item.releaseDate}
            key={index}
          />
        ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          {" "}
          View All Movies{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
