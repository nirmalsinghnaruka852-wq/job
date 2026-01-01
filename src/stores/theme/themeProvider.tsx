import { useCallback, useContext, useState, type ReactNode } from "react"
import { Theme, type ThemeProps, type ThemeType } from "./theme"

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  
  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  },[])

  const value: ThemeProps = { theme, toggleTheme }

  return (
    <Theme.Provider value={value}>
      {children}
    </Theme.Provider>
  )
}


export const  useTheme=()=>{
    const context = useContext(Theme)
    if(context) throw new Error("useTheme must be used inside the themeProvider")
    return useContext(Theme) 
}