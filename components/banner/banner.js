import React from 'react'
import styles from './Banner.module.scss'
import Link from 'next/link'

export default function banner() {


    return (
        <>

            <div className={styles.banner}>

                <div className={styles.banner_bg}>
                    <img src='/images/bg.png' alt='bg'></img>
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
                        <div className={styles.banner_left}>
                            <div className={styles.banner_left_icon}>
                                <img src='/images/team.png' alt='team'></img>
                            </div>
                            <div className={styles.banner_left_content}>
                                <p>10K + </p>
                                <span>Học viên - Sinh viên sử dụng hiệu quả</span>
                            </div>
                        </div>
                        <div className={styles.banner_right}>
                            <div className={styles.banner_right_icon}>
                                <img src='/images/arrow.png' alt='arrow'></img>
                            </div>
                            <div className={styles.banner_right_content}>
                                <p>500 + </p>
                                <span>Khóa học online đa dạng cho mọi đối tượng</span>
                            </div>
                        </div>
                        <div className={styles.hat}>
                            <img src='/images/hat.png' alt='het'></img>
                        </div>
                        <div className={styles.popup_search}>
                            <div className={styles.popup_search_cooper}>
                                <input type='text' placeholder='Tìm kiếm tài liệu, khóa học Online,...' />
                                <img src='/images/icon_look.png' alt='icon_look'></img>
                            </div>


                        </div>
                    </div>

                </div>
                <div className={styles.theorange}>
                    <img src='/images/theorange.png' alt='theorange'></img>
                </div>
                <div className={styles.purple}>
                    <img src='/images/purple.png' alt='purple'></img>
                </div>
                <div className={styles.plane}>
                    <img src='/images/plane.png' alt='plane'></img>
                </div>
                <div className={styles.stroke}>
                    <img src='/images/stroke.png' alt='stroke'></img>
                </div>


                <div className={styles.banner_course}>
                    <div className={styles.banner_course_people}>
                        <img src='/images/university.png' alt='university'></img>
                    </div>
                    <div className={styles.banner_course_content}>
                        <div className={styles.banner_course_title}>
                            <p>Bắt đầu tìm kiếm khóa học dễ dàng tại Prew</p>
                        </div>
                        <div className={styles.banner_course_lesson}>
                            <Link href='#' title='TOEIC/IELTS'>TOEIC/IELTS</Link>
                            <Link href='#' title='THCS'>THCS</Link>
                            <Link href='#' title='ĐẠI HỌC'>ĐẠI HỌC</Link>
                            <Link href='#' title='THPT'>THPT</Link>
                        </div>
                        <div className={styles.banner_course_icon}>
                            <div className={styles.banner_course_icon_group}>
                                <div className={styles.banner_course_icon_star}>
                                    <img src='/images/start.png' alt='start'></img>
                                    <span> 5.0</span>
                                </div>
                                <p>Đánh từ 6,000+ khách hàng</p>

                            </div>
                            <div className={styles.banner_course_icon_people}>
                                <img src='/images/grouppeople.png' alt='grouppeople'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
