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

export const typeOptionsMenu = {
  item: 'item',
  subMenu: 'submenu'
}

export const navigation = [
  {
    name: 'Base del conocimiento',
    icon: IoLibrarySharp,
    type: typeOptionsMenu.subMenu,
    children: [
      {
        path: PATH_CONVOCATORY,
        type: typeOptionsMenu.item,
        name: 'Convocatorias'
      },
      {
        path: PATH_CATEGORY,
        type: typeOptionsMenu.item,
        name: 'Categorías'
      }
    ]
  },
  {
    name: 'Ideación',
    icon: IoBulb,
    type: typeOptionsMenu.subMenu,
    children: [
      {
        path: PATH_IDEA,
        type: typeOptionsMenu.item,
        name: 'Ideas'
      }
    ]
  },
  {
    name: 'Banco de proyectos',
    icon: IoFileTrayFull,
    type: typeOptionsMenu.subMenu,
    children: [
      {
        path: PATH_PROJECTS,
        type: typeOptionsMenu.item,
        name: 'Proyectos'
      }
    ]
  },
  {
    name: 'Datos Básicos',
    icon: IoInformationCircleSharp,
    type: typeOptionsMenu.subMenu,
    children: [
      {
        path: PATH_THIRD_PARTIES,
        type: typeOptionsMenu.item,
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
