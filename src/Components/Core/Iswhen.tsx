type IsWhenProps = {
  when: boolean
  children: () => React.ReactNode
}


type IsWhenType = React.ReactNode | null 
const IsWhen = ({ when, children }: IsWhenProps):IsWhenType => {
  if (!when) return null
  return <>{children()}</>
}


export default IsWhen;