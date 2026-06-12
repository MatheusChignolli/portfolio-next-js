import Header from './header'
import Footer from './footer'
import HomeContent from './home-content'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
    </>
  )
}
