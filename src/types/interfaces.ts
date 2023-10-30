export interface CarDetails {
  id: number
  name: string
  owner: string
  type: string
  image: string
  url: string
}

export interface MenuItemProps {
  id: number
  text?: string
  link?: string
  icon?: ({
    className,
  }: {
    className?: string
  }) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  title?: string
}
