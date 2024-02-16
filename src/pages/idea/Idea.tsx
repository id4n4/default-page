import { UlAnimated } from '@/components/listas'
import { Header } from './Components/Header'
import { IdeasInfo } from '@/mocks/ideas'
import { ItemConvocatory } from './Components/ItemConvocatory'

export const Idea = () => {
  return (
    <section className="flex flex-col h-full gap-2">
      <Header />
      <UlAnimated className="flex flex-col gap-2 flex-grow overflow-y-auto">
        {
          IdeasInfo.map((convocatory, index) => (
            <ItemConvocatory key={index} {...convocatory} />
          ))
        }
      </UlAnimated>
    </section>
  )
}
