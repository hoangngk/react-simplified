import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './Home.tsx'
import Store from './Store.tsx'
import About from './About.tsx'
import Navbar from './Navbar.tsx'
import TeamNav from './TeamNav.tsx'
import Team from './Team.tsx'
import TeamMember from './TeamMember.tsx'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const TeamLayout = () => {
  return (
    <>
      <TeamNav />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/team',
    element: <TeamLayout />,
    children: [
      {
        index: true,
        element: <Team />,
      },
      {
        path: 'joe',
        element: <TeamMember name="joe" />,
      },
      {
        path: 'sally',
        element: <TeamMember name="sally" />,
      },
    ],
  },
])
