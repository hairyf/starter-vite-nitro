import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import './app.css'

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen text-center">
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </div>
  )
}
