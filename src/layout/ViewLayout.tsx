import { motion } from 'framer-motion'
import { type FC } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export const ViewLayout: FC<Props> = ({ children, className }) => {
  return (
    <motion.section
      className={className}
      style={{ height: '100%' }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.section>
  )
}
