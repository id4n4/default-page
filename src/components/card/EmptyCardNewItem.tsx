import { Icon } from '@tremor/react'
import { type FC } from 'react'
import { PiPlus } from 'react-icons/pi'

interface Props {
  text: string
  onClick?: () => void
  className?: string
  textClassName?: string
}

export const EmptyCardNewItem: FC<Props> = ({
  text,
  textClassName,
  ...props
}) => {
  return (
    <div
      className="rounded-lg p-2 border-dashed border w-full h-full flex items-center justify-center flex-col hover:scale-95 duration-300 cursor-pointer hover:border-customDark-primary border-gray-700 select-none"
      {...props}
    >
      <Icon icon={PiPlus} size="md" />
      <p className={textClassName}>{text}</p>
    </div>
  )
}
