import styles from "./follow-us-container.module.css";

const FollowUsContainer = ({ showFollow }) => {
  return (
    showFollow && (
      <div className={styles.follow}>
        <div className={styles.followUs}>Follow us</div>
        <img className={styles.instagramIcon} alt="" src="/instagram@2x.png" />
        <img className={styles.facebookIcon} alt="" src="/facebook@2x.png" />
      </div>
    )
  );
};

export default FollowUsContainer;
