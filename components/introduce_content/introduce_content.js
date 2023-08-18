import React from 'react'
import styles from './introduce_content.module.scss'

export default function introduce_content() {
    return (
        <div className={styles.content}>
        <div className={styles.content_title}>
        <h6>Giới thiệu về Prew</h6>
        <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản. Lorem Ipsum chỉ đơn giản là </p>
        <span>Khi đăng ký tài khoản của Prew bạn sẽ được trải nghiệm:</span>
    </div>
    <div className={styles.content_content1}>
        <p>Tài liệu phong phú, đầy đủ bao phủ các kỳ thi </p>
    </div>
    <div className={styles.content_content2}>
        <p>Thi thử online có kết quả, thống kê chi tiết, giải thích cặn kẽ</p>
    </div>
    <div className={styles.content_content3}>
        <p>Khóa học online dễ hiểu, phương pháp giảng dạy độc đáo </p>
    </div>
    <div className={styles.content_submit}>
        <a href='#'>Đăng ký tài khoản ngay để tham gia cùng PREW</a>
    </div>
    <div className={styles.girl}>
        <img src='/images/girl.png'></img>
    </div>
    <div className={styles.number1000}>
        <p>1000</p>
    </div>
    <div className={styles.number5000}>
        <p>5000</p>
    </div>
    <div className={styles.number10K}>
        <p>10K</p>
    </div>
    <div className={styles.content_popup1000}>
        <a href='#'>Bài giảng các kỹ năng</a>
    </div>
    <div className={styles.content_popup5000}>
        <a href='#'>Tài liệu, đề thi thử online</a>
    </div>
    <div className={styles.content_popup10K}>
        <a href='#'>Học sinh, sinh viên hài lòng</a>
    </div>
        </div>
    )
}
