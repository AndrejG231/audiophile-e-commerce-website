import { useEffect } from "react";
import { withRouter } from "react-router";

const ScrollTop = ({ history }: any) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  });

  return null;
};

export default withRouter(ScrollTop);
