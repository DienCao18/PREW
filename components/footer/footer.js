import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'

export default function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_block}>
        <div className={styles.footer_block_detail}>
          <img src='/images/footer_logo.png' alt='logo'/>
          <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang. Lorem Ipsum đã được sử dụng như một văn bản. </p>
        </div>
        <div className={styles.footer_block_detail}>
          <h6>Về PREW</h6>
          <ul>
            <li><a href='#' title='giới thiệu'>Giới thiệu</a></li>
            <li><a href='#' title='tài liệu'>Tài liệu</a></li>
            <li><a href='#' title='thi thử online'>Thi thử online</a></li>
            <li><a href='#' title='khóa học online'>Khóa học online</a></li>
            <li><a href='#' title='tin tức tuyển sinh'>Tin tức tuyển sinh</a></li>
            <li><a href='#' title='liên hệ'>Liên hệ</a></li>
          </ul>
        </div>
        <div className={styles.footer_block_detail}>
          <h6>Liên hệ với chúng tôi</h6>
          <div className={styles.footer_block_detail_info}>
            <img src='/images/address.png' alt='address'></img>
            <p>2/102 Lê Thanh Nghị, quận <br /> Hai Bà Trưng, Hà Nội</p>
          </div>
          <div className={styles.footer_block_detail_info}>
            <img src='/images/email.png' alt='email'></img>
            <p>prew@gmail.com.vn</p>
          </div>
          <div className={styles.footer_block_detail_info}>
            <img src='/images/phone.png' alt='phone'></img>
            <p>0973844646</p>
          </div>
        </div>
        <div className={styles.footer_block_detail}>
          <h6>Nhận thông báo bảng tin mới</h6>
          <div className={styles.footer_block_detail_infomation}>
            <p>Điền email của bạn để PREW gửi tin mới nhé!</p>
            <div className={styles.email}>
              <input type='text' placeholder='Email của bạn' />
              <img src='/images/plane_paper.png' alt='plane_paper'></img>
            </div>
            <div className={styles.social}>
              <p>Theo dõi chúng tôi:</p>
              <img src='/images/social.png' alt='social'></img>
            </div>
          </div>
        </div>
        <div className={styles.footer_phone}>
          <img src='/images/footer_phone.png' alt='footer_phone'></img>
        </div>
        <div className={styles.footer_messager}>
          <img src='/images/messager.png' alt='messager'></img>
        </div>
        <div className={styles.footer_zalo}>
          <img src='/images/zalo.png' alt='zalo'></img>
        </div>
      </div>
      <div className={styles.footer_brand}>
        <img src='/images/bear.png' alt='bear'></img>
        <p>MONA.Media/ Website+1</p>
      </div>
    </footer>
  )
}
