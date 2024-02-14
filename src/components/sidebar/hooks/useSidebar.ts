import { SidebarContext } from '@/context/SidebarProvider'
import { useContext, useEffect, useMemo, useState } from 'react'

export const useSidebar = () => {
  const context =
    useContext(SidebarContext)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const styleSidebar = useMemo(() => {
    if (isMobile) {
      return {
        overflow: 'hidden',
        width: context?.isSidebarVisible === true ? '100%' : 0,
        padding: context?.isSidebarVisible === true ? '1rem' : 0,
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'all 0.3s ease',
        zIndex: 50
      }
    }
    return {
      overflow: 'hidden',
      minWidth: '250px',
      position: 'relative'
    }
  }, [context?.isSidebarVisible, isMobile])

  const changeScreenWith = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', changeScreenWith)
    return () => {
      window.removeEventListener('resize', changeScreenWith)
    }
  }, [])

  return {
    isSidebarVisible: context?.isSidebarVisible,
    styleSidebar,
    handleSidebarVisibility: context?.handleSidebarVisibility,
    isMobile
  }
}
