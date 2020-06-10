import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

const NAV = (props) => (
  <div>
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannercontent}>
          <Link prefetch href="/">
            <a className={styles.abanner}>coronAgora</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NAV;
