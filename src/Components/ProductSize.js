import { Typography } from "@mui/material";

export const ProductSize = ({ product }) => {
  if (!product?.size) return;

  return (
    <Typography noWrap variant="span" fontSize="x-small" color="blue">
      ({product.size})
    </Typography>
  );
};
