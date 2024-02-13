import { ConvocatoryData } from '@/mocks/convocatory'
import { ItemConvocatory } from './components/ItemConvocatory'
import { Header } from './components/Header'
import { motion } from 'framer-motion'

export const Convocatory = () => {
  return (
    <section className="flex flex-col h-full gap-2">
      <Header />
      <motion.ul
        className="flex flex-col gap-2 flex-grow overflow-y-auto"
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
        {ConvocatoryData.map((convocatory) => (
          <ItemConvocatory key={convocatory.id} {...convocatory} />
        ))}
      </motion.ul>
    </section>
  )
}
