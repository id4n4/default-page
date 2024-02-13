import { UlAnimated } from '@/components/listas'
import { Header } from './components/Header'
import { categoryData } from '@/mocks/category'
import { ItemCategory } from './components/ItemCategory'

export const Category = () => {
  return (
    <section className="flex flex-col h-full gap-2">
      <Header />
      <UlAnimated className="flex flex-col gap-2 flex-grow overflow-y-auto">
        {categoryData.map((category) => (
          <ItemCategory key={category.id} {...category} />
        ))}
      </UlAnimated>
    </section>
  )
}
