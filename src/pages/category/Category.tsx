import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { Header } from './components/Header'
import { categoryData } from '@/mocks/category'
import { StatusBadges } from '@/components/badges'

export const Category = () => {
  return (
    <section>
      <Header />
      <main>
        <Table className="mt-5 rounded-md">
        <TableHead className='bg-customDark-background'>
          <TableRow>
            <TableHeaderCell >Nombre</TableHeaderCell>
            <TableHeaderCell>Descripción</TableHeaderCell>
            <TableHeaderCell>Entidad</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryData.map(({ id, description, entityName, name, active }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell>
                {description}
              </TableCell>
              <TableCell>
                {entityName}
              </TableCell>
              <TableCell>
                <StatusBadges isActive={active} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </main>
    </section>
  )
}
