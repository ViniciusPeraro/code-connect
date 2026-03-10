import styles from './heading.module.css';

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles[`h${level}`]}>{children}</HeadingTag>;
};

export default Heading;