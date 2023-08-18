import React from 'react'
import styles from './News.module.scss'

export default function news() {
    return (
        <div className={styles.news}>
            <div className={styles.news_bg}>
                <img src='/images/bg_purple.png'></img>

            </div>
            <div className={styles.news_title}>
                <h3> Tin tức tuyển sinh </h3>
            </div>
            <div className={styles.news_content}>
                <div className={styles.news_content_block}>
                    <span>06.06.2023</span>
                    <h6>Thông báo chính thức từ Sở Giáo dục về kỳ thi tốt nghiệp THPT năm 2023</h6>
                    <img src='/images/news_girl.png'></img>
                    <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản.</p>
                </div>
                <div className={styles.news_content_block}>
                    <span>06.06.2023</span>
                    <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>

                    <img src='/images/students.png'></img>
                    <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản.</p>
                </div>
                <div className={styles.news_content_block}>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>
                        <img src='/images/arrow-right.png'></img>

                    </div>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>

                        <img src='/images/arrow-right.png'></img>

                    </div>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Tuyển sinh năm 2023-2024 của Đại học Quốc gia Thành phố HCM</h6>

                        <img src='/images/arrow-right.png'></img>

                    </div>
                    <div className={styles.news_content_block_include}>
                        <span>06.06.2023</span>
                        <h6>Thông báo chính thức từ Sở Giáo dục về kỳ thi tốt nghiệp THPT năm 2023</h6>
                        <img src='/images/arrow-right.png'></img>

                    </div>


                </div>
                <div className={styles.document_button}>
                    

                </div>
                <div className={styles.document_button}>
                    <a href='#'>Xem thêm bộ tài liệu tại đây</a>

                </div>
            </div>

        </div>
    )
}
