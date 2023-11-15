import { useMemo } from "react";
import AddressForm from "./address-form";
import FollowUsContainer from "./follow-us-container";
import styles from "./footer.module.css";

const Footer = ({
  showContactUs,
  showAboutUs,
  showFollow,
  footerPosition,
  footerTop,
  footerLeft,
  addressTop,
  addressHeight,
  groupDivTop,
  groupDivTop1,
  groupDivTop2,
  contactUsTop,
  addressTop1,
  addressHeight1,
  aboutUsTop,
  giiThiuTop,
  hngDnMuaTop,
  chnhSchITop,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  const addressStyle = useMemo(() => {
    return {
      top: addressTop,
      height: addressHeight,
    };
  }, [addressTop, addressHeight]);

  const groupDivStyle = useMemo(() => {
    return {
      top: groupDivTop,
    };
  }, [groupDivTop]);

  const groupDiv1Style = useMemo(() => {
    return {
      top: groupDivTop1,
    };
  }, [groupDivTop1]);

  const groupDiv2Style = useMemo(() => {
    return {
      top: groupDivTop2,
    };
  }, [groupDivTop2]);

  const contactUsStyle = useMemo(() => {
    return {
      top: contactUsTop,
    };
  }, [contactUsTop]);

  const address1Style = useMemo(() => {
    return {
      top: addressTop1,
      height: addressHeight1,
    };
  }, [addressTop1, addressHeight1]);

  const aboutUsStyle = useMemo(() => {
    return {
      top: aboutUsTop,
    };
  }, [aboutUsTop]);

  const giiThiuStyle = useMemo(() => {
    return {
      top: giiThiuTop,
    };
  }, [giiThiuTop]);

  const hngDnMuaStyle = useMemo(() => {
    return {
      top: hngDnMuaTop,
    };
  }, [hngDnMuaTop]);

  const chnhSchIStyle = useMemo(() => {
    return {
      top: chnhSchITop,
    };
  }, [chnhSchITop]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footer1} />
      <img className={styles.footerChild} alt="" src="/rectangle-2@2x.png" />
      <div className={styles.tHngV}>Đặt hàng và vận chuyển toàn quốc</div>
      <AddressForm showContactUs />
      <div className={styles.address} style={address1Style}>
        {showAboutUs && (
          <div className={styles.aboutUs} style={aboutUsStyle}>
            About us
          </div>
        )}
        <div className={styles.giiThiu} style={giiThiuStyle}>
          Giới thiệu
        </div>
        <div className={styles.hngDnMua} style={hngDnMuaStyle}>
          Hướng dẫn mua hàng
        </div>
        <div className={styles.chnhSchI} style={chnhSchIStyle}>
          Chính sách đổi trả
        </div>
      </div>
      <FollowUsContainer showFollow />
    </div>
  );
};

export default Footer;
