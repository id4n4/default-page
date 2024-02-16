import { useState } from 'react'

export const useItemIdea = () => {
  const [isVisibleModalShare, setIsVisibleModalShare] = useState(false)
  const [isVisibleModalEdit, setIsVisibleModalEdit] = useState(false)
  const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false)

  const handleShare = () => {
    setIsVisibleModalShare((value) => !value)
  }
  const handleEdit = () => {
    setIsVisibleModalEdit((value) => !value)
  }
  const handleDelete = () => {
    setIsVisibleModalDelete((value) => !value)
  }

  const onDelete = (id: number | undefined) => {
    console.log('delete ' + id)
    handleDelete()
  }

  return {
    state: {
      isVisibleModalShare,
      isVisibleModalEdit,
      isVisibleModalDelete
    },
    handlers: {
      handleShare,
      handleEdit,
      handleDelete,
      onDelete
    }
  }
}
