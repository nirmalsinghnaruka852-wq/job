type IsWhenProps = {
  when: boolean
  children: () => React.ReactNode
}

const IsWhen = ({ when, children }: IsWhenProps) => {
  if (!when) return null
  return <>{children()}</>
}




export default IsWhen;