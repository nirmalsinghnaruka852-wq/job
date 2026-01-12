import  { type IconName } from './../../shared/components/core/index'

export const NavLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Company reviews', path: '/company-reviews' },
  { name: 'Salary guide', path: '/salary-guide' },
  { name: 'Profile', path: '/profile' },
] as const;


type NavLinksLogos = {
  name: IconName
  path: string
}


export const NavLinksLogo :NavLinksLogos[]= [  
  { name: 'AArrowDown', path: '/home' },
  { name: 'AArrowDown', path: '/company-reviews' },
  { name: 'AArrowDown', path: '/salary-guide' },
  { name: 'AArrowDown', path: '/profile' },

]



export type RoutePath = typeof NavLinks[number]['path'] & typeof NavLinksLogo[number]['path'] ;

