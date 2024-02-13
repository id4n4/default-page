import { ConvocatoryData } from '@/mocks/convocatory'
import { ItemConvocatory } from './components/ItemConvocatory'
import { Header } from './components/Header'
import { UlAnimated } from '@/components/listas'

export const Convocatory = () => {
  return (
    <section className="flex flex-col h-full gap-2">
      <Header />
      <UlAnimated className="flex flex-col gap-2 flex-grow overflow-y-auto">
        {ConvocatoryData.map((convocatory) => (
          <ItemConvocatory key={convocatory.id} {...convocatory} />
        ))}
      </UlAnimated>
    </section>
  )
}
