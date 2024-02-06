import { createContext, useState } from 'react'

export const SidebarContext = createContext()

export function SidebarProvider ({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const handleSidebarVisibility = () => {
    setIsSidebarVisible(last => !last)
  }
  return (
    <SidebarContext.Provider value={{ isSidebarVisible, handleSidebarVisibility }}>
      {children}
    </SidebarContext.Provider>
  )
}
