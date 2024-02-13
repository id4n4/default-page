import { Badge } from '@tremor/react'
import { type FC } from 'react'
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'

interface Props {
  isActive: boolean
}

export const StatusBadges: FC<Props> = ({ isActive }) => {
  if (isActive) {
    return (
      <Badge icon={IoCheckmarkCircle} color="green">
        Activo
      </Badge>
    )
  }
  return (
    <Badge icon={IoCloseCircle} color="red">
      Inactivo
    </Badge>
  )
}
