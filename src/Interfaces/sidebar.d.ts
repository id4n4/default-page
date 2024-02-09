import { type OptionsMenuType } from '@/constants/authConstants'
import { type FC } from 'react'

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
