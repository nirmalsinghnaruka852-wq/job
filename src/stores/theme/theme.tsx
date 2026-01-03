import { createContext } from "react";

export type ThemeType = 'light' | 'dark'
type Fn = () => void

export type ThemeProps = {
  theme: ThemeType
  toggleTheme: Fn
}

const _state: ThemeProps = {
  theme: 'light',
  toggleTheme: () => {}
}



export const Theme = createContext<ThemeProps>(_state)
