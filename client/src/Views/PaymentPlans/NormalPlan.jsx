import React from "react";
import styles from "./NormalPlan.module.css";

export default function NormalPlan () {
    return (
        <div className={styles.container}>
            <div className={styles.headSection}>
                <p>Head</p>
            </div>
            <div className={styles.bodySection}>
            <p>Body</p>
            </div>

        </div>
    )
}