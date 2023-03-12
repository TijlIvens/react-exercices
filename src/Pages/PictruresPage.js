import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Picture } from "../Components/Picture";

export const PicturesPage = ({ pictures }) => {
  return (
    <Box>
      <Typography variant="h2">Pictures</Typography>
      {pictures.map((picture) => (
        <Picture key={picture.id} picture={picture} />
      ))}
    </Box>
  );
};
