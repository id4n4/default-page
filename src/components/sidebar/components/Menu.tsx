import { navigation } from '../../../mocks/sidebar'
import { Item } from './Item'
import { SubMenu } from './SubMenu'

export const Menu = () => {
  return (
    <>
      {navigation.map(({ path, icon, name, type, children }, idx) => {
        if (type === 'submenu') {
          return (
            <SubMenu
              key={idx}
              Icon={icon}
              name={name}
              subOptions={children}
            />
          )
        }
        return (
          <Item
            key={idx}
            path={path}
            Icon={icon}
            name={name}
          />
        )
      })}
    </>
  )
}
