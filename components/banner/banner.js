import React from 'react'
import styles from './Banner.module.scss'

export default function banner() {
    return (
        <>
           
            <div className={styles.banner}>
                <div className={styles.banner_bg}>
                    <img src='/images/bg.png'></img>
                </div>

                <div className={styles.banner_popup}>
                    <div className={styles.popup_icon}>
                        <div className={styles.popup_icon_round}></div>
                        <div className={styles.popup_icon_round}></div>
                        <div className={styles.popup_icon_round}></div>
                    </div>

                    <div className={styles.popup_content}>
                        <h1 className={styles.popup_title}>PREW.VN <span>học và luyện thi Online</span>  hiệu quả, tiết kiệm</h1>
                        <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản.</p>
                        <div className={styles.popup_search}>
                            <div className={styles.popup_search_cooper}>
                                <input type='text' placeholder='Tìm kiếm tài liệu, khóa học Online,...' />
                                <img src='/images/icon_look.png'></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
