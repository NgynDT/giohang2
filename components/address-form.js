import { useMemo } from "react";
import styles from "./address-form.module.css";

const AddressForm = ({
  showContactUs,
  groupDivTop,
  groupDivHeight,
  ngCMT8QunTop,
  linH0969404274Top,
  contactUsTop,
  propTop,
}) => {
  const addressStyle = useMemo(() => {
    return {
      top: groupDivTop,
      height: groupDivHeight,
    };
  }, [groupDivTop, groupDivHeight]);

  const groupDivStyle = useMemo(() => {
    return {
      top: ngCMT8QunTop,
    };
  }, [ngCMT8QunTop]);

  const groupDiv1Style = useMemo(() => {
    return {
      top: linH0969404274Top,
    };
  }, [linH0969404274Top]);

  const groupDiv2Style = useMemo(() => {
    return {
      top: contactUsTop,
    };
  }, [contactUsTop]);

  const contactUsStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.address} style={addressStyle}>
      <div className={styles.ngNguynDuQun1ThnhPhParent} style={groupDivStyle}>
        <div className={styles.ngNguynDu}>
          123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh
        </div>
        <img className={styles.clothesIcon} alt="" src="/clothes@2x.png" />
      </div>
      <div className={styles.ngCmt8QunTnBnhThnhParent} style={groupDiv1Style}>
        <div className={styles.ngNguynDu}>
          456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh
        </div>
        <img className={styles.clothesIcon} alt="" src="/clothes1@2x.png" />
      </div>
      <div className={styles.linH0969404274Wrapper} style={groupDiv2Style}>
        <div className={styles.linH0969404274}>
          Liên hệ:
          <span className={styles.span}>0969404274</span>
        </div>
      </div>
      {showContactUs && (
        <div className={styles.contactUs} style={contactUsStyle}>
          Contact us
        </div>
      )}
    </div>
  );
};

export default AddressForm;
