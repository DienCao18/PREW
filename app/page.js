
import styles from './page.module.scss'
import Banner from '@/components/banner/banner'
import Introduce_content from '@/components/introduce_content/introduce_content'
import Document from '@/components/document/document'
import Test from '@/components/test/test'

export default function Home() {
  return (
    <>
      <Banner />
      <Introduce_content />
      <Document/>
      <Test />
    </>



  )
}
