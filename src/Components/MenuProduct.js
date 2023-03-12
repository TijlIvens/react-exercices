import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ProductSize } from "./ProductSize";

export const MenuProduct = ({ product }) => {
  if (!product.name) return;

  return (
    <Box width={300} display="flex">
      <Box flex={1}>
        <Typography noWrap>
          {product.name} <ProductSize product={product} />
        </Typography>
        {product.note && (
          <Typography fontSize="x-small" color="blue">
            {product.note}
          </Typography>
        )}
      </Box>
      <Box>
        <Typography noWrap>&euro; {product.price}</Typography>
      </Box>
    </Box>
  );
};
