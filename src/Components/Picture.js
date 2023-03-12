import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Picture = ({ picture }) => {
  return (
    <Box>
      <img src={picture.url} alt={picture.author} width="100%" />
      <Typography>
        by <Link href={picture.credit}>{picture.author}</Link>
      </Typography>
    </Box>
  );
};
