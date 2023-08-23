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
            <li><Link href="#" title='trang chủ'> Trang chủ</Link></li>
            <li><Link href="#" title='giới thiệu'> Giới thiệu</Link></li>
            <li><Link href="#" title='thi thử online'> Thi thử online</Link></li>
            <li><Link href="#" title='tài liệu học tập'> Tài liệu học tập</Link></li>
            <li><Link href="#" title='tin tức tuyển sinh'> Tin tức tuyển sinh</Link></li>
          </ul>
        </div>
        <div className={styles.header_dropdown}>
          <div className={styles.header_dropdown_inner}>
            
          </div>
          <div className={styles.header_dropdown_inner_hover}>
              <a href='#' title='đăng nhập'> Đăng nhập </a>
              <a href='#' title='đăng ký'> Đăng ký </a>
              <a href="#" title='trang chủ'>Trang chủ </a>
              <a href="#" title='giới thiệu'>Giới thiệu </a>
              <a href="#" title='thi thử online'>Thi thử online </a>
              <a href="#" title='tài liệu học tập'>Tài liệu học tập </a>
              <a href="#" title='tin tức tuyển sinh'>Tin tức tuyển sinh </a>

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
