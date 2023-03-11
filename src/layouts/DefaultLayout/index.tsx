import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Header'
// import { Header } from '../../components/'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      {/* <Header /> */}
      <Navbar />

      <Outlet />
    </LayoutContainer>
  )
}
