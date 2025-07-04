import { Button, Input } from '@heroui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [name = '', setName] = useState<string>()
  const navigate = useNavigate()

  const go = async () => {
    navigate(`/hi/${name}`)
  }

  return (
    <div className="w-80 flex gap-4">
      <Input value={name} onChange={e => setName(e.target.value)} />
      <Button onPress={go}>Go</Button>
    </div>
  )
}
