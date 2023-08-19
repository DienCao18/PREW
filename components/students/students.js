import React from 'react';
import styles from './Students.module.scss'





export default function Students() {
  
 
  return (
    <>
      <div className={styles.students}>
        <div className={styles.students_bg}>
          <img src='/images/world.png'></img>

        </div>
        <div className={styles.students_bg_rignt}>
          <img src='/images/bg_right.png'></img>

        </div>

        <div className={styles.students_title}>
          <h3> Học sinh - sinh viên nói gì về chúng tôi</h3>
        </div>
        <div className={styles.students_content}>
          <p>Nhờ có Prew mà mình đã đạt được target 800+ Toeic trong 6 tháng. Mình thấy Prew là một trang Web luyện thi Toeic cực hiệu quả lại còn miễn phí nữa nên là các bạn nào có dự tính tự học thì mau mau đăng ký tài khoản để học nha. Cảm ơn Prew rất nhiều &lt;3</p>
          <span>Trâm Anh <br />Thành viên Toeic của Prew</span>
        </div>
        <div className={styles.students_nhai}>
          <img src='/images/nhai.png'></img>

        </div>
        <div className={styles.student_girl}>
          <img src='/images/student_girl.png'></img>
        </div>

        <div className={styles.student_1}>
          <img src='/images/student1.png'></img>
        </div>
        <div className={styles.student_2}>
          <img src='/images/student2.png'></img>
        </div>
        <div className={styles.student_3}>
          <img src='/images/student3.png'></img>
        </div>
        <div className={styles.student_4}>
          <img src='/images/student4.png'></img>
        </div>
        <div className={styles.student_5}>
          <img src='/images/student5.png'></img>
        </div>

        <div className={styles.student_6}>
          <img src='/images/student1.png'></img>
        </div>
        <div className={styles.student_7}>
          <img src='/images/student2.png'></img>
        </div>
        <div className={styles.student_8}>
          <img src='/images/student3.png'></img>
        </div>
        <div className={styles.student_9}>
          <img src='/images/student4.png'></img>
        </div>
        <div className={styles.student_10}>
          <img src='/images/student5.png'></img>
        </div>
        <div className={styles.student_11}>
          <img src='/images/student1.png'></img>
        </div>
        <div className={styles.student_12}>
          <img src='/images/student14.png'></img>
        </div>
        <div className={styles.student_13}>
          <img src='/images/student3.png'></img>
        </div>
        <div className={styles.student_14}>
          <img src='/images/student14.png'></img>
        </div>
        <div className={styles.student_15}>
          <img src='/images/student15.png'></img>
        </div>


      </div>

      <div className={styles.company}>
        <div className={styles.company_title}>

          <h3>Đối tác của chúng tôi</h3>
          <div className={styles.company_title_button}>
            <button className={styles.prev_button}>&lt;</button>
            <button className={styles.next_button}>&gt;</button>
          </div>

        </div>
        <div className={styles.company_logo}>
          <div className={styles.slider_container}>
            <div className={styles.slider}>
              <div className={styles.slide}>
                <img src='/images/logo1.png'></img>
              </div>
              <div className={styles.slide}>
                <img src='/images/logo2.png'></img>
              </div>
              <div className={styles.slide}>
                <img src='/images/logo3.png'></img>
              </div>
              <div className={styles.slide}>
                <img src='/images/logo4.png'></img>
              </div>
              <div className={styles.slide}>
                <img src='/images/logo5.png'></img>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
