export default function PatientTable() {
    const patients = [
      { id: 1, name: 'John Doe', doctor: 'Dr. Smith', dateOfAdmit: '2023-05-15', disease: 'Flu', roomNo: 101, status: 'Recovered' },
      { id: 2, name: 'Jane Smith', doctor: 'Dr. Johnson', dateOfAdmit: '2023-05-16', disease: 'Migraine', roomNo: 102, status: 'In Treatment' },
      { id: 3, name: 'Bob Wilson', doctor: 'Dr. Brown', dateOfAdmit: '2023-05-17', disease: 'Sprain', roomNo: 103, status: 'Recovered' },
      { id: 4, name: 'Alice Johnson', doctor: 'Dr. Davis', dateOfAdmit: '2023-05-18', disease: 'Pneumonia', roomNo: 104, status: 'Critical' },
      { id: 5, name: 'Charlie Brown', doctor: 'Dr. Wilson', dateOfAdmit: '2023-05-19', disease: 'Fracture', roomNo: 105, status: 'Stable' },
    ]
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Assigned Doctor</th>
              <th className="py-3 px-6 text-left">Date of Admit</th>
              <th className="py-3 px-6 text-left">Disease</th>
              <th className="py-3 px-6 text-left">Room No</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{patient.name}</td>
                <td className="py-3 px-6 text-left">{patient.doctor}</td>
                <td className="py-3 px-6 text-left">{patient.dateOfAdmit}</td>
                <td className="py-3 px-6 text-left">{patient.disease}</td>
                <td className="py-3 px-6 text-left">{patient.roomNo}</td>
                <td className="py-3 px-6 text-left">
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    patient.status === 'Recovered' ? 'bg-green-200 text-green-600' :
                    patient.status === 'In Treatment' ? 'bg-yellow-200 text-yellow-600' :
                    patient.status === 'Critical' ? 'bg-red-200 text-red-600' :
                    'bg-blue-200 text-blue-600'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex item-center justify-center">
                 
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }