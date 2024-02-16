import { Button, Divider, Text } from '@tremor/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FC, useRef, useEffect } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import {
  IoCloseSharp,
  IoPencilSharp,
  IoShareSocialOutline
} from 'react-icons/io5'

interface Props {
  handleShare: () => void
  handleEdit: () => void
  handleDelete: () => void
}

export const TooltipOptions: FC<Props> = ({
  handleShare,
  handleDelete,
  handleEdit
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const handleOptions = () => {
    setIsOptionsVisible((value) => !value)
  }

  const tooltipRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOptionsVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <>
      <Button
        ref={buttonRef}
        variant="light"
        className="absolute top-2 right-2"
        onClick={handleOptions}
      >
        <HiDotsVertical className="text-lg" />
      </Button>
      <AnimatePresence>
        {isOptionsVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0, 1.1, 1] }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 top-7 right-0 bg-white rounded-lg shadow-md flex flex-col items-end"
            ref={tooltipRef}
          >
            <div
              className="cursor-pointer p-2 w-full text-right hover:bg-gray-200 rounded-t-lg flex items-center justify-between gap-2"
              onClick={handleShare}
            >
              <IoShareSocialOutline />
              <Text>Compartir</Text>
            </div>
            <div
              className="cursor-pointer p-2 w-full text-right hover:bg-gray-200 flex items-center justify-between gap-2"
              onClick={handleEdit}
            >
              <IoPencilSharp />
              <Text>Editar</Text>
            </div>
            <Divider className="p-0 m-0" />
            <div
              className="cursor-pointer p-2 w-full text-right hover:bg-gray-200 rounded-b-lg  flex items-center justify-between gap-2"
              onClick={handleDelete}
            >
              <IoCloseSharp className="text-red-600" />
              <Text className="text-red-600 font-medium">Eliminar</Text>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
