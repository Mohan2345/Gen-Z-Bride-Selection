import { Link } from "react-router-dom" // Import Link from react-router-dom
import ToggleSwitches from "./fun"
import { FaGithub } from "react-icons/fa" // React Icons for GitHub
import React from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header Section */}
      <header className="w-full py-8 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Gen-Z BRIDE SELECTION
        </h1>
        <p className="mt-4 text-2xl text-gray-600 dark:text-gray-400">Choose At Your Own Risk</p>
      </header>

 
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-6 text-center">
            <p className="mt-2 text-2xl font-bold text-gray-600 dark:text-gray-400">Nowadays Only two choices can be active at the same time</p>
          </div>

          {/* Toggle Switches Component */}
          <div className="flex justify-center">
            <ToggleSwitches />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white py-4 shadow-lg dark:bg-gray-900">
        <div className="container mx-auto flex items-center justify-center space-x-2 px-4 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Developed by</span>
          <Link
            to="https://github.com/Mohan2345"  
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-blue-500 transition-colors hover:text-blue-400"
          >
            <span className="font-medium">Deepak Kumar Bastia</span>
            <FaGithub className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}