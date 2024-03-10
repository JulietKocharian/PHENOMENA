import styles from './arrows.module.css'

const path = ['../assets/sections/fifthSection/rightArrow.svg', '../assets/sections/fifthSection/leftArrow.svg'];

export const ScrollToLeft = (props) => {
  const { onActive, isActive, onClick } = props;

  const _onClick = () => {
    onClick();
    onActive();
  }

  return (
    <button className={`${styles.prevArrow} ${isActive ? styles.arrowButtonActive : styles.arrowButtonInactive}`} onClick={_onClick}>
      <img
        alt='leftArrow'
        src={isActive ? path[0] : path[1]}
        className={isActive && styles.transformImg}
      />
    </button>
  );
};

export const ScrollToRight = (props) => {

  const { onActive, isActive, onClick } = props;

  const _onClick = () => {
    onClick();
    onActive();
  }

  return (
    <button className={`${styles.nextArrow} ${isActive ? styles.arrowButtonActive : styles.arrowButtonInactive}`} onClick={_onClick}>
      <img
        alt='leftArrow'
        src={isActive ? path[0] : path[1]}
        className={!isActive && styles.transformImg} />
    </button>
  );
};


export const ScrollToTop = (props) => {
  const { onClick } = props;
  return (
    <button className={`${styles.nextArrow} ${styles.arrowButtonTop}`} onClick={onClick}>
      <img src='../assets/sections/fifthSection/topArrow.svg' alt='arrow' style={{ width: '40px' }} />
    </button>
  )
}