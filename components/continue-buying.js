import { useMemo } from "react";
import styles from "./continue-buying.module.css";

const ContinueBuying = ({
  continueBuyingPosition,
  continueBuyingTop,
  continueBuyingLeft,
  rectangleIconCursor,
  onRectangle22Click,
}) => {
  const continueBuyingStyle = useMemo(() => {
    return {
      position: continueBuyingPosition,
      top: continueBuyingTop,
      left: continueBuyingLeft,
    };
  }, [continueBuyingPosition, continueBuyingTop, continueBuyingLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      cursor: rectangleIconCursor,
    };
  }, [rectangleIconCursor]);

  return (
    <div className={styles.continueBuying} style={continueBuyingStyle}>
      <img
        className={styles.continueBuyingChild}
        alt=""
        src="/rectangle-47.svg"
        style={rectangleIconStyle}
        onClick={onRectangle22Click}
      />
      <div className={styles.tipTcMua}>TIẾP TỤC MUA HÀNG</div>
    </div>
  );
};

export default ContinueBuying;
