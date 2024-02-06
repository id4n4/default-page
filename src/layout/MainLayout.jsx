import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/sidebar'
import { SidebarProvider } from '../context/sidebarProvider'

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <section className='w-screen h-screen flex bg-customLight-background'>
        <Sidebar />
        <main className='flex-grow p-5'>
          <Outlet />
        </main>
      </section>
    </SidebarProvider>
  )
}
