import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link';

export default function header() {


  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_logo}>
          <Link href="/" >
            <picture><img src="/images/logo.png" alt="PREW.VN" /></picture>
          </Link>
        </div>
        <div className={styles.header_submenu}>
          <ul>
            <li><Link href="#"> Trang chủ</Link></li>
            <li><Link href="#"> Giới thiệu</Link></li>
            <li><Link href="#"> Thi thử online</Link></li>
            <li><Link href="#"> Tài liệu học tập</Link></li>
            <li><Link href="#"> Tin tức tuyển sinh</Link></li>
          </ul>
        </div>
        <div className={styles.header_dropdown}>
          <div className={styles.header_dropdown_inner}>
            
          </div>
          <div className={styles.header_dropdown_inner_hover}>
              <a href='#'> Đăng nhập </a>
              <a href='#'> Đăng ký </a>
              <a href="#">Trang chủ </a>
              <a href="#">Giới thiệu </a>
              <a href="#">Thi thử online </a>
              <a href="#">Tài liệu học tập </a>
              <a href="#">Tin tức tuyển sinh </a>

            </div>
        </div>
        <div className={styles.header_login}>
          <a href='#'> Đăng nhập </a>
          <a href='#'> Đăng ký </a>
        </div>
      </div>
    </header>
  )
}
