import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto p-8">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        {children}
      </div>
    </div>
  )
}