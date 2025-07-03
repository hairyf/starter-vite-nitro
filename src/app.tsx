import routes from '~react-pages'
import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import "./app.css"

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen text-center">
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </div>
  )
}
