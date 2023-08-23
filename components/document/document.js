import React from 'react'
import styles from './Document.module.scss'


export default function document() {
    return (
        <div className={styles.document}>
            <div className={styles.document_title}>
                <div className={styles.document_title_content}>
                    <h3>Tài liệu mới nhất</h3>

                    <div className={styles.document_title_content_icon}>
                        <img src='/images/wheel.png' alt='wheel'></img>
                    </div>
                    <div className={styles.document_title_content_icon_new}>
                        <img src='/images/new.png' alt='new'></img>
                    </div>
                </div>
                <div className={styles.document_title_list}>
                    <ul>
                        <li>Tất cả</li>
                        <li>IELTS Academic</li>
                        <li>IELTS General</li>
                        <li>TOEIC</li>
                        <li>Tiếng Anh THPTQG</li>
                        <li>NEW SAT</li>

                    </ul>
                </div>

                <div className={styles.document_title_search}>
                    <form>
                        <input type="text" id="lesson" name="lesson" list="lessons" placeholder='Chọn bộ tài liệu' />
                        <div className={styles.document_title_icon_down}>
                            <img src='/images/down.png' alt='down'></img>
                        </div>
                        <datalist id="lessons">
                            <option value="Toán" />
                            <option value="Anh" />
                            <option value="Hóa học" />
                            <option value="Vật lý" />
                        </datalist>
                        <input type='text' placeholder='Nhập từ khóa tài liệu bạn muốn tìm kiếm' />
                        <div className={styles.document_title_look}>
                            <img src='/images/look_purple.png' alt='look_purple'></img>
                        </div>
                    </form>

                </div>

            </div>
            <div className={styles.document_content}>
                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video1.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>

                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eyes'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='start'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video2.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eye'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video3.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eyes'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video4.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eye'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video5.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eye'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video6.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eye'></img>
                     
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video7.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eye'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>

                <div className={styles.document_content_block}>
                    <div className={styles.document_content_video}>
                        <img src='/images/video8.png' alt='video'></img>
                        <div className={styles.documet_overlay}>
                            <div className={styles.document_content_video_active}>
                                <img src='/images/video_eyes.png' alt='video'></img>
                                <p>Xem ngay</p>
                                <img src='/images/dowloading.png' alt='down'></img>
                                <p>Tải xuống</p>

                            </div>
                        </div>
                    </div>
                    <p>Ngữ pháp Tiếng Anh ôn thi Toeic hiệu quả dành cho sinh viên</p>
                    <div className={styles.document_content_comment}>
                        <img src='/images/eyes.png' alt='eye'></img>
                        <span>999 lượt xem</span>
                        <img src='/images/star-bar.png' alt='star'></img>
                        <span>(05)</span>

                    </div>
                </div>
            </div>
            <div className={styles.document_button}>
                <a href='#'>Xem thêm bộ tài liệu tại đây</a>

            </div>

        </div>
    )
}
