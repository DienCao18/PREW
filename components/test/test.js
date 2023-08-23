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
                    <li><a href='#' title='all'>Tất cả</a></li>
                    <li><a href='#' title='IELTS Academic'>IELTS Academic</a></li>
                    <li><a href='#' title='IELTS General'>IELTS General</a></li>
                    <li><a href='#' title='TOEIC'>TOEIC</a></li>
                    <li><a href='#' title='Tiếng Anh THPTQG'>Tiếng Anh THPTQG</a></li>
                    <li><a href='#' title='NEW SAT'>NEW SAT</a></li>
                    <li><a href='#' title='Tiếng Anh THCS'>Tiếng Anh THCS</a></li>
                    <li><a href='#' title='Đại học'>Đại học</a></li>
                    <li><a href='#' title='NEW SAT'>NEW SAT</a></li>
                </ul>
            </div>

            <div className={styles.test_title_search}>
                <form>
                    <input type="text" id="lesson" name="lesson" list="lessons" placeholder='Chọn bộ tài liệu' />
                    <div className={styles.document_title_icon_down}>
                        <img src='/images/down.png' alt='dowwn'></img>
                    </div>
                    <datalist id="lessons">
                        <option value="Toán" />
                        <option value="Anh" />
                        <option value="Hóa học" />
                        <option value="Vật lý" />
                    </datalist>
                    <input type='text' placeholder='Nhập từ khóa tài liệu bạn muốn tìm kiếm' />
                    <div className={styles.test_title_look}>
                        <img src='/images/look_purple.png' alt='look_purple'></img>
                    </div>
                </form>

            </div>

            <div className={styles.test_content}>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png' alt='clock'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png' alt='question'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png' alt='clock'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png' alt='question'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png' alt='clock'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png' alt='question'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png' alt='clock'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png' alt='question'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png' alt='clock'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png' alt='question'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png' alt='test'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png' alt='clock'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png' alt='question'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>
                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_block}>
                    <div className={styles.test_content_video}>
                        <img src='/images/test.png'></img>
                        <h6>C17 IELTS</h6>
                        <p>listening test 1</p>
                    </div>
                    <div className={styles.test_content_comment}>
                        <h6>Bộ đề thi: <span>IELTS C17 Full Test 1</span></h6>
                        <p>Thông tin:</p>
                        <div className={styles.test_content_comment_include}>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.right}>
                                    <img src='/images/Clock.png'></img>
                                    <p> 40 phút </p>
                                </div>
                                <div className={styles.right}>
                                    <img src='/images/Question.png'></img>
                                    <p> 4 phần thi </p>
                                </div>
                                <div className={styles.right}>
                                    <a href='#' title='listening'> #Listening </a>

                                </div>
                            </div>
                            <div className={styles.test_content_comment_include_private}>
                                <div className={styles.left}>
                                    <img src='/images/User.png'></img>
                                    <p> 202345 </p>
                                </div>
                                <div className={styles.left}>
                                    <img src='/images/paper.png'></img>
                                    <p> 40 câu hỏi </p>
                                </div>
                                <div className={styles.left}>
                                    <a href='#' title='#IELTS Academic'> #IELTS Academic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.test_button_register}>
                <a href='#' title='document'>Xem thêm bộ tài liệu tại đây</a>

            </div>
        </div>
    )
}
