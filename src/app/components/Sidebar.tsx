import Link from 'next/link'
import { HomeIcon, UserIcon, CalendarIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className="bg-white w-64 h-full shadow-lg">
      <div className="p-4 flex items-center">

<p>&#129658;</p>        <span className="text-xl font-semibold">Medical</span>
      </div>
      <nav className="mt-8">
        <Link href="/" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </Link>
        <Link href="/patients" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <UserIcon className="w-5 h-5 mr-2" />
          Patients
        </Link>
        <Link href="/patients" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <UserIcon className="w-5 h-5 mr-2" />
          Patients
        </Link>
        <Link href="/appointments" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <CalendarIcon className="w-5 h-5 mr-2" />
          Appointments
        </Link>
        <Link href="/appointments" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <CalendarIcon className="w-5 h-5 mr-2" />
         Calendar
        </Link>
        <Link href="/reports" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <ChartBarIcon className="w-5 h-5 mr-2" />
          Reports
        </Link>
        <Link href="/reports" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <ChartBarIcon className="w-5 h-5 mr-2" />
          Reports
        </Link>
        <Link href="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <CogIcon className="w-5 h-5 mr-2" />
          Settings
        </Link>
      </nav>
    </div>
  )
}