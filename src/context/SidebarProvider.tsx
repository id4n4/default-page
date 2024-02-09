import { type FC, createContext, useState } from 'react'

interface ContextType {
  isSidebarVisible: boolean
  handleSidebarVisibility: () => void
}

interface Props {
  children: React.ReactNode
}

export const SidebarContext = createContext<ContextType | null>(null)

export const SidebarProvider: FC<Props> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true)

  const handleSidebarVisibility = () => {
    setIsSidebarVisible(last => !last)
  }
  return (
    <SidebarContext.Provider value={{ isSidebarVisible, handleSidebarVisibility }}>
      {children}
    </SidebarContext.Provider>
  )
}
