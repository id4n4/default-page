import { Card } from '@tremor/react'
import { type FC } from 'react'

interface Props {
  text: string
  onclick?: () => void
}

export const EmptyCardNewItem: FC<Props> = ({ text, ...props }) => {
  return (
    <Card className='bg-gray-50 hover:bg-gray-100 cursor-pointer' {...props}>
      <p className='text-center'>{text}</p>
    </Card>
  )
}
