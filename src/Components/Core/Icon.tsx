import * as Icons from 'lucide-react'
import { useMemo, type ComponentProps, type FC } from 'react'
import { useTheme } from '../../stores/theme/themeProvider'
import { iconColors } from '../../stores/theme/constant'

    type IconName = keyof typeof Icons

  export   type IconProps = {
    name: IconName
    size?: number
    color?: string
    }

    function Icon({ name='Activity', size = 20, color  }: IconProps) {

       const {theme} = useTheme()  
     const LucideIcon   =useMemo(()=> Icons[name] as FC<ComponentProps<typeof Icons['Activity']>>, [name])  
    return <LucideIcon size={size} color={color ??iconColors[theme]} />
    }

    export default Icon
