import { useState } from "react";
// components
import Grid from "@material-ui/core/Grid";

// custom components
import { DetailsTab } from "../../components/compound/tabs/tabs.component";
import { DetailsImage } from "./../../components/compound/detailsImage/detailsImage.component";

import { MovieDetails } from "./detailsView.component";
import { MovieCast } from "./castView.component";
// constants

export const MovieDetailsLayout = ({ details }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  console.log(details);
  // tabs related logic
  const tabDetails = {
    tabList: ["Details", "Cast"],
    viewList: [
      <MovieDetails movieData={details} />,
      <MovieCast details={details} />,
    ],
  };

  const passTabIndex = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <DetailsImage imgSrc={details.src} />
        </Grid>
        <Grid item xs={12} md={8}>
          <DetailsTab
            tabList={tabDetails.tabList}
            passTabIndex={passTabIndex}
            activeTabIndex={activeTabIndex}
          />
          {tabDetails.viewList[activeTabIndex]}
        </Grid>
      </Grid>
    </div>
  );
};
