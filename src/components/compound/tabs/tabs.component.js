import React, { useEffect } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const DetailsTab = ({ tabList, activeTabIndex, passTabIndex }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // todo write a passthrough call back method for value

  useEffect(() => {
    passTabIndex(value);
  }, [passTabIndex, value]);
  return (
    <Tabs
      value={activeTabIndex}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      {tabList.map((tab, tabIndex) => (
        <Tab key={tabIndex} label={tab} />
      ))}
    </Tabs>
  );
};
