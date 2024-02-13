import { motion } from 'framer-motion'
import { type FC } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export const UlAnimated: FC<Props> = ({ children, className }) => {
  return (
    <motion.ul
      className={className}
      variants={{
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      }}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.ul>
  )
}

export const LiAnimated: FC<Props> = ({ children, className }) => {
  return (
    <motion.li
      className={className}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      }}
    >
      {children}
    </motion.li>
  )
}
