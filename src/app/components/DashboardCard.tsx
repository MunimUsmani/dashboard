export default function DashboardCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className={`${color} p-4 rounded-lg shadow text-white`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}