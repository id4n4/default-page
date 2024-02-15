import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/sidebar'
import { SidebarProvider } from '@/context/SidebarProvider'

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <section className="w-screen h-screen flex bg-customLight-background overflow-hidden">
        <Sidebar />
        <main className="flex-grow p-5 overflow-auto">
          <Outlet />
        </main>
      </section>
    </SidebarProvider>
  )
}
