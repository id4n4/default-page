import { type FC } from 'react'

export enum OptionsMenuType {
  item = 'item',
  subMenu = 'submenu'
}

export interface Items {
  path: string
  type: OptionsMenuType
  name: string
}

export interface Menu {
  path?: string
  name: string
  icon: FC
  type: OptionsMenuType
  children?: Items[]
}
