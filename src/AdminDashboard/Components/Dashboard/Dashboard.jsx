import { useState } from 'react';
import {
  FileText,
  ArrowUp,
  PhoneCall,
  MapPin,
  Home,
  Users,
  Image as ImageIcon,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FormControl, MenuItem, Select } from '@mui/material';

const Dashboard = () => {
  const data = [
    { year: 2016, value: 8000 },
    { year: 2017, value: 12000 },
    { year: 2018, value: 45000 },
    { year: 2019, value: 80000 },
    { year: 2020, value: 10000 },
    { year: 2021, value: 20000 },
    { year: 2022, value: 60000 },
    { year: 2023, value: 100000 },
  ];

  const projects = [
    {
      id: 1,
      name: 'Upkar Green Valley',
      status: 'Active',
      progress: 80,
      due: 'Jan 15, 2025',
      agent: 'Raj',
    },
    {
      id: 2,
      name: 'Upkar Green Valley',
      status: 'Active',
      progress: 60,
      due: 'Jan 15, 2025',
      agent: 'Raj',
    },
    {
      id: 3,
      name: 'Upkar Green Valley',
      status: 'Active',
      progress: 90,
      due: 'Jan 15, 2025',
      agent: 'Raj',
    },
    {
      id: 4,
      name: 'Upkar Green Valley',
      status: 'Active',
      progress: 70,
      due: 'Jan 15, 2025',
      agent: 'Raj',
    },
    {
      id: 5,
      name: 'Upkar Green Valley',
      status: 'Active',
      progress: 85,
      due: 'Jan 15, 2025',
      agent: 'Raj',
    },
  ];

  const [period, setPeriod] = useState('yearly');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Properties', value: '12' },
          { label: 'Total Available Plots', value: '12' },
          { label: 'Total Inquiry', value: '12' },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex items-start justify-between"
          >
            <div className="flex flex-col gap-1 items-start">
              <div className="p-2 border border-gray-300 rounded-md flex items-center justify-center">
                <FileText className="text-green-800" size={20} />
              </div>
              <p className="text-3xl font-bold text-green-800">{card.value}</p>
              <p className="text-gray-600 text-sm">{card.label}</p>
            </div>
            <div className="text-green-800 flex items-start gap-1 text-sm">
              +2 <ArrowUp size={16} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="space-y-5">
          {[
            {
              icon: <PhoneCall className="text-green-800" size={18} />,
              title: 'Recent Enquiry for Green Valley Phase 2',
              name: 'Rajesh Kumar',
              time: '2 minutes ago',
            },
            {
              icon: <MapPin className="text-green-800" size={18} />,
              title: 'Plot A-45 sold in Sunrise Layout',
              name: 'Priya Sharma',
              time: '3 hours ago',
            },
            {
              icon: <Home className="text-green-800" size={18} />,
              title: `New Property “Eden Gardens” added`,
              name: 'Yash Raj',
              time: '23 hours ago',
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  {activity.icon}
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">
                    {activity.name} · {activity.time}
                  </p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">⋮</button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Sales <span className="font-bold">Revenue</span>
            </h2>
            <FormControl variant="outlined" size="small">
              <Select
                value={period}
                onChange={handleChange}
                displayEmpty
                sx={{
                  borderColor: '#D1D5DB',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D1D5DB',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#9CA3AF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#6B7280',
                  },
                  fontSize: '0.875rem',
                  padding: '0px 12px',
                }}
              >
                <MenuItem value="yearly">Yearly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
              </Select>
            </FormControl>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1e5631" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1e5631" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1e5631"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 gap-4">
          <button className="bg-green-800 text-white flex flex-col items-center justify-center py-6 rounded-lg hover:bg-green-900 transition">
            <FileText size={24} />
            <span className="text-sm mt-2 font-medium">Add new Property</span>
          </button>
          <button className="bg-green-800 text-white flex flex-col items-center justify-center py-6 rounded-lg hover:bg-green-900 transition">
            <MapPin size={24} />
            <span className="text-sm mt-2 font-medium">Manage Plots</span>
          </button>
          <button className="bg-green-800 text-white flex flex-col items-center justify-center py-6 rounded-lg hover:bg-green-900 transition">
            <Users size={24} />
            <span className="text-sm mt-2 font-medium">View Inquiries</span>
          </button>
          <button className="bg-green-800 text-white flex flex-col items-center justify-center py-6 rounded-lg hover:bg-green-900 transition">
            <ImageIcon size={24} />
            <span className="text-sm mt-2 font-medium">Upload Media</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Project <span className="font-bold">Overviews</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-gray-600 border-b border-gray-300">
              <tr>
                <th className="py-2 px-3">S.no</th>
                <th className="py-2 px-3">Project Name</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Progress</th>
                <th className="py-2 px-3">Due Date</th>
                <th className="py-2 px-3">Agent</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td className="py-3 px-3">{p.id}</td>
                  <td className="py-3 px-3">{p.name}</td>
                  <td className="py-3 px-3">
                    <span className="bg-green-800 text-white px-3 py-1 rounded-md text-xs font-medium">
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-800 rounded-full"
                        style={{ width: `${p.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-3 px-3">{p.due}</td>
                  <td className="py-3 px-3">{p.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
