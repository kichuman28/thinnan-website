import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tailwind CSS Demo</h2>
                <div className="flex justify-center space-x-4">
                  <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => setCount(count => count + 1)}
                  >
                    Count: {count}
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </button>
                </div>
                <p className="mt-4 text-center text-gray-600">
                  This is a demo showing various Tailwind CSS utilities including:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Flexbox & Grid</li>
                  <li>Colors & Gradients</li>
                  <li>Spacing & Sizing</li>
                  <li>Transforms & Transitions</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
