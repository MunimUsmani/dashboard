import Layout from "@/app/components/Layout";
import DashboardCard from "@/app/components/DashboardCard";
import PatientTable from "@/app/components/PatientTable";
import BarChart from "@/app/components/BarChart";
import LineChart from "@/app/components/LineChart";
import AreaChart from "@/app/components/AreaChart";
import SmallChart from "@/app/components/SmallCharts";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <DashboardCard title="New Patients" value="125" color="bg-purple-500" />
        <DashboardCard title="OPD Patients" value="218" color="bg-blue-500" />
        <DashboardCard
          title="Today's Operations"
          value="25"
          color="bg-green-500"
        />
        <DashboardCard title="Visitors" value="2,479" color="bg-yellow-500" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Hospital Survey</h2>
        <LineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 mt-10">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">New Patient</h2>
          <AreaChart />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Heart Surgeries</h2>
          <BarChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Medical Treatment</h2>
          <LineChart />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Short Patient List</h2>
        <PatientTable />
      </div>
    </Layout>
  );
}
