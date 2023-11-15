import { useMemo } from "react";
import styles from "./total.module.css";

const Total = ({
  totalPosition,
  totalTop,
  totalLeft,
  rectangleDivCursor,
  onRectangle23Click,
}) => {
  const totalStyle = useMemo(() => {
    return {
      position: totalPosition,
      top: totalTop,
      left: totalLeft,
    };
  }, [totalPosition, totalTop, totalLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      cursor: rectangleDivCursor,
    };
  }, [rectangleDivCursor]);

  return (
    <div className={styles.total} style={totalStyle}>
      <div
        className={styles.totalChild}
        style={rectangleDivStyle}
        onClick={onRectangle23Click}
      />
      <b className={styles.tngTinThanh}>Tổng tiền thanh toán</b>
    </div>
  );
};

export default Total;
