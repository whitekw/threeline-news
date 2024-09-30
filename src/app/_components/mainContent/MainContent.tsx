import styles from "./MainContent.module.css";

const MainContent = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className={styles.mainContent}>{children}</div>
  );
};

export default MainContent;