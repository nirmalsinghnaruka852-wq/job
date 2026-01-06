import * as Icons from 'lucide-react'
import { useMemo, type ComponentProps, type FC } from 'react'
// import { useTheme } from '../../stores/theme/themeP/rovider'
// import { iconColors } from '../../stores/theme/constant'

    export type IconName = keyof typeof Icons

  export   type IconProps = {
    name: IconName
    size?: number
    color?: string
    }

    function Icon({ name='Activity', size = 20  }: IconProps) {
      //  const {theme} = useTheme()  
     const LucideIcon   =useMemo(()=> Icons[name] as FC<ComponentProps<typeof Icons['Activity']>>, [name])  
    return <LucideIcon size={size}  />
    }

    export default Icon
