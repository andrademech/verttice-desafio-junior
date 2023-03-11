import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { FirstChallenge } from './pages/FirstChallenge'
import { SecondChallenge } from './pages/SecondChallenge'
import { ThirdChallenge } from './pages/ThirdChallenge'
import { FourthChallenge } from './pages/FourthChallenge'
import { FifthChallenge } from './pages/FifthChallenge'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<FirstChallenge />} />
        <Route path="/second" element={<SecondChallenge />} />
        <Route path="/third" element={<ThirdChallenge />} />
        <Route path="/fourth" element={<FourthChallenge />} />
        <Route path="/fifth" element={<FifthChallenge />} />
      </Route>
    </Routes>
  )
}
