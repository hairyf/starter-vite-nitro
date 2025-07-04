import { useParams } from 'react-router-dom'

export default function Hi() {
  const { name } = useParams<{ name: string }>()
  return (
    <div>
      Hello
      {name}
    </div>
  )
}
