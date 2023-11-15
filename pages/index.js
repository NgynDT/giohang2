import { useCallback } from "react";
import Footer from "../components/footer";
import HinThSnPhm from "../components/hin-th-sn-phm";
import ContinueBuying from "../components/continue-buying";
import Total from "../components/total";
import styles from "./index.module.css";

const GiHng = () => {
  const onRectangle22Click = useCallback(() => {
    // Please sync "Trang hiển thị sản phẩm" to the project
  }, []);

  const onRectangle23Click = useCallback(() => {
    // Please sync "Trang thanh toán" to the project
  }, []);

  const onLOGOSTOREContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className={styles.giHng}>
      <div className={styles.giHngInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.logoStore} onClick={onLOGOSTOREContainerClick}>
            <img
              className={styles.logoStoreChild}
              alt=""
              src="/rectangle-2@2x.png"
            />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/rectangle-3.svg"
              />
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.tmKim}>TÌM KIẾM</div>
            </div>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <div className={styles.shoppingCart}>
              <img
                className={styles.shoppingCartIcon}
                alt=""
                src="/shoppingcart.svg"
              />
              <div className={styles.ellipseParent}>
                <div className={styles.groupItem} />
                <div className={styles.div}>1</div>
              </div>
            </div>
          </div>
          <div className={styles.navBar}>
            <div className={styles.giCBit}>GIÁ ĐẶC BIỆT</div>
            <div className={styles.qunOParent}>
              <div className={styles.qunO}>QUẦN ÁO</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.oSMi}>ÁO SƠ MI</div>
            <div className={styles.oSMi}>POLO</div>
          </div>
          <Footer
            showContactUs={false}
            showAboutUs={false}
            showFollow={false}
            footerPosition="absolute"
            footerTop="1280px"
            footerLeft="0px"
            addressTop="198.4px"
            addressHeight="183.6px"
            groupDivTop="0px"
            groupDivTop1="70.4px"
            groupDivTop2="150.6px"
            contactUsTop="-37.4px"
            addressTop1="220px"
            addressHeight1="129px"
            aboutUsTop="-52px"
            giiThiuTop="0px"
            hngDnMuaTop="48px"
            chnhSchITop="96px"
          />
          <div className={styles.frameInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
          <div className={styles.frameChild5} />
          <div className={styles.frameChild6} />
          <div className={styles.frameChild7} />
          <div className={styles.frameChild8} />
          <div className={styles.frameChild9} />
          <div className={styles.nhSnPhm}>Ảnh sản phẩm</div>
          <div className={styles.tnSnPhm}>Tên Sản Phẩm</div>
          <div className={styles.nGi}>Đơn giá</div>
          <div className={styles.sLng}>Số lượng</div>
          <div className={styles.thnhTin}>Thành tiền</div>
          <div className={styles.xa}>Xóa</div>
          <HinThSnPhm
            hinThSnPhmPosition="absolute"
            hinThSnPhmTop="372px"
            hinThSnPhmLeft="32px"
          />
          <div className={styles.div1}>380.000₫</div>
          <div className={styles.div2}>380.000₫</div>
          <div className={styles.div3}>1</div>
          <div className={styles.trangChGiHngParent}>
            <div className={styles.trangChContainer}>
              <span>{`TRANG CHỦ /  `}</span>
              <span className={styles.giHng1}>Giỏ hàng</span>
            </div>
            <div className={styles.groupInner} />
          </div>
          <ContinueBuying
            continueBuyingPosition="absolute"
            continueBuyingTop="623px"
            continueBuyingLeft="37px"
            rectangleIconCursor="pointer"
            onRectangle22Click={onRectangle22Click}
          />
          <div className={styles.tmTnh}>Tạm tính</div>
          <div className={styles.tngTinThanh}>Tổng tiền thanh toán</div>
          <Total
            totalPosition="absolute"
            totalTop="792px"
            totalLeft="940px"
            rectangleDivCursor="pointer"
            onRectangle23Click={onRectangle23Click}
          />
        </div>
      </div>
      <div className={styles.linHVi}>Liên hệ với chúng tôi</div>
      <div className={styles.vChngTi}>Về chúng tôi</div>
      <div className={styles.theoDiChng}>Theo dõi chúng tôi</div>
      <img className={styles.instagramIcon} alt="" src="/instagram@2x.png" />
      <img className={styles.facebookIcon} alt="" src="/facebook@2x.png" />
    </div>
  );
};

export default GiHng;
