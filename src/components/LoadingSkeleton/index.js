import styles from './LoadingSkeleton.module.scss';

const LoadingSkeleton = ({ value, className }) => {
  return (
    <span className={`${value === null ? styles.loading : ''} ${className}`}>
      {value}
    </span>
  );
};

export default LoadingSkeleton;
