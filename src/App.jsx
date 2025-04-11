import { HeaderContainer, DesktopCards, NavBar, MobileCards, FooterContainer } from './components'

function App() {
  return (
    <>
      <HeaderContainer />
      <NavBar />
      <main className='flex justify-center'>
        <DesktopCards />
        <MobileCards />
      </main>
     <FooterContainer/>
    </>
  )
}

export default App

