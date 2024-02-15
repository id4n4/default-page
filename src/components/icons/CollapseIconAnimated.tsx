import { IoCaretDown } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { type FC } from 'react'

interface Props {
  isCollapsed: boolean
}

export const CollapseIconAnimated: FC<Props> = ({ isCollapsed }) => {
  return (
    <motion.div
      variants={{
        open: { rotate: 0 },
        close: { rotate: 180 }
      }}
      animate={isCollapsed ? 'close' : 'open'}
      transition={{ duration: 0.4 }}
    >
      <IoCaretDown />
    </motion.div>
  )
}
