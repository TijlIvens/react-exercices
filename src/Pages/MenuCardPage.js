import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MenuProduct } from "../Components/MenuProduct";

export const MenuCardPage = ({ products }) => {
  return (
    <Box>
      <Typography variant="h2">Menu</Typography>
      {products.map((product) => (
        <MenuProduct key={product.name} product={product} />
      ))}
    </Box>
  );
};
