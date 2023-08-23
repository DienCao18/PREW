"use client"
import React, { useEffect } from 'react'
import styles from './News.module.scss'
import gsap from 'gsap';

export default function news() {
   
    return (
        <div className={styles.news}>
            <div className={styles.news_bg}>
                <img src='/images/bg_purple.png' alt='bg_purple'></img>

            </div>
            <div className={styles.news_title}>
                <h3> Tin tức tuyển sinh </h3>
            </div>
            <div className={styles.news_content}>
                <div className={styles.news_content_block}>
                    <span>06.06.2023</span>
                    <h6>Thông báo chính thức từ Sở Giáo dục về kỳ thi tốt nghiệp THPT năm 2023</h6>
                    <img src='/images/news_girl.png' alt='news_girl'></img>
                    <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản.</p>
                </div>
                <div className={styles.news_content_block}>
                    <span>06.06.2023</span>
                    <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>

                    <img src='/images/students.png' alt='student'></img>
                    <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản.</p>
                </div>
                <div className={styles.news_content_block}>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>
                        <img src='/images/arrow-right.png' alt='arrow-right'></img>

                    </div>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>

                        <img src='/images/arrow-right.png' alt='arrow-right'></img>

                    </div>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>

                        <img src='/images/arrow-right.png' alt='arrow-right'></img>

                    </div>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Thông báo chính thức từ Sở Giáo dục về kỳ thi tốt nghiệp THPT năm 2023</h6>
                        <img src='/images/arrow-right.png' alt='arrow-right'></img>

                    </div>


                </div>
            </div>
            <div className={styles.document_button}>
                <a href='#' title='document'>Xem thêm bộ tài liệu tại đây</a>
            </div>
        </div>
    )
}
