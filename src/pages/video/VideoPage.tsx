import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/shared/Heading";

function VideoPage() {
  const { id } = useParams();

  const getLink = () => {
    return "https://www.youtube.com/embed/" + id;
  };

  return (
    <>
      <Heading title="Watch Video Solution" />
      <Box
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <iframe
          src={getLink()}
          width={900}
          height={400}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        ></iframe>
      </Box>
    </>
  );
}

export default VideoPage;
