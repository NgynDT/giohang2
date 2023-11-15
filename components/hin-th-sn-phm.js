import { useMemo } from "react";
import styles from "./hin-th-sn-phm.module.css";

const HinThSnPhm = ({ hinThSnPhmPosition, hinThSnPhmTop, hinThSnPhmLeft }) => {
  const hinThSnPhmStyle = useMemo(() => {
    return {
      position: hinThSnPhmPosition,
      top: hinThSnPhmTop,
      left: hinThSnPhmLeft,
    };
  }, [hinThSnPhmPosition, hinThSnPhmTop, hinThSnPhmLeft]);

  return (
    <div className={styles.hinThSnPhm} style={hinThSnPhmStyle}>
      <img className={styles.hinThSnPhmChild} alt="" src="/rectangle-45.svg" />
      <div className={styles.div}>380.000₫</div>
      <div className={styles.div1}>380.000₫</div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.hinThSnPhmItem} />
      <div className={styles.hinThSnPhmInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.hinThSnPhmChild1} />
      <div className={styles.hinThSnPhmChild2} />
      <div className={styles.hinThSnPhmChild3} />
      <div className={styles.lineBoxyRaglan}>LINE BOXY RAGLAN TEE - CREAM</div>
      <div className={styles.hinThSnPhmChild4} />
      <div className={styles.hinThSnPhmChild5} />
      <div className={styles.div2}>+</div>
      <div className={styles.div3}>-</div>
      <img className={styles.iconTrash} alt="" src="/-icon-trash.svg" />
    </div>
  );
};

export default HinThSnPhm;
