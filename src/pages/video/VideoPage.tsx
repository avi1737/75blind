import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/shared/Heading";

function VideoPage() {
  const { id } = useParams();

  return (
    <>
      <Heading title="Watch Video Solution" />
    </>
  );
}

export default VideoPage;
