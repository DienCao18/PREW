import React from 'react'
import styles from './Document.module.scss'


export default function document() {
    return (
        <div className={styles.document}>
            <div className={styles.document_title}>
                <div className={styles.document_title_content}>
                    <h3>Tài liệu mới nhất</h3>
                    <span>NEW</span>
                    <div className={styles.document_title_content_icon}>
                        <img src='/images/wheel.png'></img>
                    </div>
                </div>
            </div>
            <div className={styles.document_content}>
                <div className={styles.document_content_video}>

                </div>
            </div>


        </div>
    )
}
