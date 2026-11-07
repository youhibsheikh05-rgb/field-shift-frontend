import DisclaimerBanner from './components/DisclaimerBanner'
import AttributionFooter from './components/AttributionFooter'
import MapView from './components/MapView'
import RotationInput from './components/RotationInput'
import PrioritySliders from './components/PrioritySliders'
import ConstraintsForm from './components/ConstraintsForm'
import WhatIfSliders from './components/WhatIfSliders'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <DisclaimerBanner />
      
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-green-700">Field Shift</h1>
        <p className="text-sm text-gray-500">Adapting farms with NASA data</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-4">Choose your farm location</h2>
          <MapView />
        </section>

        <RotationInput />
        <PrioritySliders />
        <ConstraintsForm />
        <WhatIfSliders />

        <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg text-gray-500 bg-white">
          Strategy cards will appear here after the API contract is approved.
        </div>
      </main>

      <AttributionFooter />
    </div>
  )
}

export default App