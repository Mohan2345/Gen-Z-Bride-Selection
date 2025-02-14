import React from "react"
import { useState } from "react"
import { FaToggleOn, FaToggleOff } from "react-icons/fa" // React Icons for toggle

export default function ToggleSwitches() {
  // Initialize state with 2 switches on and 1 switch off
  const [switches, setSwitches] = useState({
    switch1: true,
    switch2: true,
    switch3: false,
  })

  const handleToggle = (switchName) => {
    setSwitches((prev) => {
      const activeCount = Object.values(prev).filter(Boolean).length

      // If the switch is being turned off
      if (prev[switchName]) {
        // Find the switch that is currently off
        const switchToTurnOn = Object.keys(prev).find((key) => !prev[key] && key !== switchName)

        // If a switch is found to turn on, toggle the states
        if (switchToTurnOn) {
          return {
            ...prev,
            [switchName]: false,
            [switchToTurnOn]: true,
          }
        }
      }

      // If the switch is being turned on and 2 are already active, turn off one of the active switches
      if (!prev[switchName] && activeCount >= 2) {
        const switchToTurnOff = Object.keys(prev).find((key) => prev[key] && key !== switchName)

        return {
          ...prev,
          [switchToTurnOff]: false,
          [switchName]: true,
        }
      }

      // Default behavior: toggle the switch
      return {
        ...prev,
        [switchName]: !prev[switchName],
      }
    })
  }

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="space-y-6">
        {/* Switch 1 */}
        <div className="flex items-center justify-between">
          <label htmlFor="switch1" className="text-base font-medium text-gray-700 dark:text-gray-200">
            Beautiful
          </label>
          <button
            id="switch1"
            onClick={() => handleToggle("switch1")}
            className="focus:outline-none"
          >
            {switches.switch1 ? (
              <FaToggleOn className="w-8 h-8 text-blue-500" />
            ) : (
              <FaToggleOff className="w-8 h-8 text-gray-400" />
            )}
          </button>
        </div>

        {/* Switch 2 */}
        <div className="flex items-center justify-between">
          <label htmlFor="switch2" className="text-base font-medium text-gray-700 dark:text-gray-200">
            Dahej
          </label>
          <button
            id="switch2"
            onClick={() => handleToggle("switch2")}
            className="focus:outline-none"
          >
            {switches.switch2 ? (
              <FaToggleOn className="w-8 h-8 text-blue-500" />
            ) : (
              <FaToggleOff className="w-8 h-8 text-gray-400" />
            )}
          </button>
        </div>

        {/* Switch 3 */}
        <div className="flex items-center justify-between">
          <label htmlFor="switch3" className="text-base font-medium text-gray-700 dark:text-gray-200">
            Seal Packed
          </label>
          <button
            id="switch3"
            onClick={() => handleToggle("switch3")}
            className="focus:outline-none"
          >
            {switches.switch3 ? (
              <FaToggleOn className="w-8 h-8 text-blue-500" />
            ) : (
              <FaToggleOff className="w-8 h-8 text-gray-400" />
            )}
          </button>
        </div>

        
      </div>
    </div>
  )
}