import { Box } from "@mui/system";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { PICTURES_DATA, PRODUCTS_DATA } from "./data/data";
import { MenuCardPage } from "./Pages/MenuCardPage";
import { PicturesPage } from "./Pages/PictruresPage";
import "react-tabs/style/react-tabs.css";

export const App = () => {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Menu</Tab>
          <Tab>Pictures</Tab>
        </TabList>

        <TabPanel>
          <MenuCardPage products={PRODUCTS_DATA} />
        </TabPanel>
        <TabPanel>
          <PicturesPage pictures={PICTURES_DATA} />
        </TabPanel>
      </Tabs>
    </Box>
  );
};
