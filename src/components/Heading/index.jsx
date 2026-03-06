import styles from './heading.module.css';

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles.heading}>{children}</HeadingTag>;
};

export default Heading;