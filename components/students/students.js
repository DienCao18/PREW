import React from 'react'
import styles from './Students.module.scss'

export default function students() {
  return (
    <div className={styles.students}>
      <div className={styles.students_bg}>
        <img src='/images/world.png'></img>

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
    </div>
  )
}
