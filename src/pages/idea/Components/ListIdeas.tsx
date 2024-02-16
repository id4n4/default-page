import { AnimatePresence, motion } from 'framer-motion'
import { ItemIdea } from './ItemIdea'
import { type Ideas } from '../interface/idea'
import { useState, type FC } from 'react'
import { LiAnimated } from '@/components/listas'
import { EmptyCardNewItem } from '@/components/card'
import { ModalEdit } from './ModalEdit'

interface Props {
  isVisibleIdeas: boolean
  ideas: Ideas[]
}

export const ListIdeas: FC<Props> = ({ isVisibleIdeas, ideas }) => {
  const [isVisibleModalCreate, setIsVisibleModalCreate] = useState(false)
  const handleVisibleModalCreate = () => { setIsVisibleModalCreate((value) => !value) }
  return (
    <AnimatePresence>
      {isVisibleIdeas && (
        <motion.div
          className="overflow-y-auto"
          initial={{ maxHeight: 0 }}
          animate={{ maxHeight: 500 }}
          exit={{ maxHeight: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-full p-3 grid gap-2 justify-stretch items-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
            }}
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {ideas.map((idea, index) => (
              <ItemIdea key={index} {...idea} />
            ))}
            <LiAnimated>
              <EmptyCardNewItem text='Nueva Idea' textClassName='text-white' onClick={handleVisibleModalCreate} />
              <ModalEdit isOpen={isVisibleModalCreate} handleClose={handleVisibleModalCreate} />
            </LiAnimated>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
