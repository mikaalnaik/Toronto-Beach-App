import styles from './LoadingSkeleton.module.scss';

const LoadingSkeleton = ({ value, className }) => {
  console.log({ value });
  return (
    <span className={`${value === null ? styles.loading : ''} ${className}`}>
      {value}
    </span>
  );
};

export default LoadingSkeleton;
