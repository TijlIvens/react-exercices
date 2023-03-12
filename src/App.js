import { Box } from "@mui/system";
import { PRODUCTS_DATA } from "./data/data";
import { MenuCardPage } from "./Pages/MenuCardPage";

export const App = () => {
  return (
    <Box>
      <MenuCardPage products={PRODUCTS_DATA} />
    </Box>
  );
};
