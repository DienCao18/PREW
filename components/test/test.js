import React from 'react'
import styles from './Test.module.scss'
export default function test() {
    return (
        <div className={styles.test}>
            <div className={styles.test_title}>
                <h3>Đề thi thử mới nhất</h3>
                <div className={styles.test_button}>
                    <a href='#'>Xem tất cả</a>
                </div>
            </div>
            <div className={styles.test_title_list}>
                <ul>
                    <li>Tất cả</li>
                    <li>IELTS Academic</li>
                    <li>IELTS General</li>
                    <li>TOEIC</li>
                    <li>Tiếng Anh THPTQG</li>
                    <li>NEW SAT</li>
                    <li>Tiếng Anh THCS</li>
                    <li>Đại học</li>
                    <li>NEW SAT</li>

                </ul>
            </div>

            <div className={styles.test_title_search}>
                <form>
                    <input type="text" id="lesson" name="lesson" list="lessons" placeholder='Chọn bộ tài liệu' />
                    <div className={styles.document_title_icon_down}>
                        <img src='/images/down.png'></img>
                    </div>
                    <datalist id="lessons">
                        <option value="Toán" />
                        <option value="Anh" />
                        <option value="Hóa học" />
                        <option value="Vật lý" />
                    </datalist>
                    <input type='text' placeholder='Nhập từ khóa tài liệu bạn muốn tìm kiếm' />
                    <div className={styles.test_title_look}>
                        <img src='/images/look_purple.png'></img>
                    </div>
                </form>

            </div>

            <div className={styles.test_content}>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>

                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/Question.png'></img>
                                    <p> 40 phần thi </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
