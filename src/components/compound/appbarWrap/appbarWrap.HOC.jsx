// this component is merely a Hoc that wraps pages around the app bar
import { AppBarLayout } from "../../../layouts/simpleAppbar/simpleAppbar.layout";
//  styles and themes

import { useStyles } from "./appbarWrap.styles";

export const AppBarWrap = (WrappedComponent) => {
  const styles = useStyles();

  const EnhancedComp = (props) => {
    return (
      <div className={styles.container}>
        <AppBarLayout {...props} />
        <WrappedComponent {...props} />
      </div>
    );
  };
  return EnhancedComp;
};
