interface CategoryProps {
  params: {
    categories: string[]
  },
  searchParams: {
    name : string
  }
}

export default function Categories(props: CategoryProps) {
  console.log(props)

  const { params: {categories}, searchParams: { name } } = props 
  return (
    <h1>category :  {categories} {name} </h1>
  )
}
