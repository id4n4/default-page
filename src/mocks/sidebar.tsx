import { type Menu, OptionsMenuType } from '@/Interfaces'
import {
  PATH_CATEGORY,
  PATH_CONFIG,
  PATH_CONVOCATORY,
  PATH_IDEA,
  PATH_PROJECTS,
  PATH_THIRD_PARTIES
} from '../constants/routePaths'

import {
  IoSettingsOutline,
  IoLibrarySharp,
  IoBulb,
  IoFileTrayFull,
  IoInformationCircleSharp
} from 'react-icons/io5'

export const navigation: Menu[] = [
  {
    name: 'Base del conocimiento',
    icon: IoLibrarySharp,
    type: OptionsMenuType.subMenu,
    children: [
      {
        path: PATH_CONVOCATORY,
        type: OptionsMenuType.item,
        name: 'Convocatorias'
      },
      {
        path: PATH_CATEGORY,
        type: OptionsMenuType.item,
        name: 'Categorías'
      }
    ]
  },
  {
    name: 'Ideación',
    icon: IoBulb,
    type: OptionsMenuType.subMenu,
    children: [
      {
        path: PATH_IDEA,
        type: OptionsMenuType.item,
        name: 'Ideas'
      }
    ]
  },
  {
    name: 'Banco de proyectos',
    icon: IoFileTrayFull,
    type: OptionsMenuType.subMenu,
    children: [
      {
        path: PATH_PROJECTS,
        type: OptionsMenuType.item,
        name: 'Proyectos'
      }
    ]
  },
  {
    name: 'Datos Básicos',
    icon: IoInformationCircleSharp,
    type: OptionsMenuType.subMenu,
    children: [
      {
        path: PATH_THIRD_PARTIES,
        type: OptionsMenuType.item,
        name: 'Entidad o terceros'
      }
    ]
  }
]

export const navFooter = [
  {
    path: PATH_CONFIG,
    name: 'Configuración',
    icon: IoSettingsOutline
  }
]
