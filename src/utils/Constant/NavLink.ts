export const NavLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Company reviews', path: '/company-reviews' },
  { name: 'Salary guide', path: '/salary-guide' },
  { name: 'Profile', path: '/profile' },
] as const;

export type RoutePath = typeof NavLinks[number]['path'];

