import { LiAnimated, UlAnimated } from '@/components/listas'
import { Header } from './Components/Header'
import { Button, Card, Title } from '@tremor/react'
import { useState } from 'react'
import { CollapseIconAnimated } from '@/components/icons/CollapseIconAnimated'

export const Idea = () => {
  const [isVisibleIdeas, setIsVisibleIdeas] = useState(false)

  const handleVisibleIdeas = () => { setIsVisibleIdeas(value => !value) }
  return (
    <section className="flex flex-col h-full gap-2">
      <Header />
      <UlAnimated className="flex flex-col gap-2 flex-grow overflow-y-auto">
        <LiAnimated>
          <section className='bg-customDark-background'>
            <Card className='p-2 flex justify-between cursor-pointer' onClick={handleVisibleIdeas}>
              <Title>Convocatoria 1</Title>
              <div className='flex items-center'>
                <Button>Detalles</Button>
                <CollapseIconAnimated isCollapsed={isVisibleIdeas}/>
              </div>
            </Card>
            <div className='text-customDark-main'>
              <div>
                idea
              </div>
            </div>
          </section>
        </LiAnimated>
      </UlAnimated>
    </section>
  )
}
