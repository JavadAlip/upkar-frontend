import { useState, useEffect } from 'react';
import { getAllEnquiries, getAllProjects } from '../../../Api';
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
import AddProject from '../Projects/addProject';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [totalEnquiries, setTotalEnquiries] = useState(0);
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [period, setPeriod] = useState('yearly');
  const [recentProjects, setRecentProjects] = useState([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const navigate = useNavigate();

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };

  useEffect(() => {
    fetchEnquiries();
    fetchProjects();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const data = await getAllEnquiries();

      if (Array.isArray(data)) {
        setTotalEnquiries(data.length);

        const latest = [...data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 1);

        setRecentEnquiries(latest);
      }
    } catch (error) {
      console.error('Failed to fetch enquiries', error);
    }
  };
  const fetchProjects = async () => {
    try {
      const res = await getAllProjects();

      if (res?.projects && Array.isArray(res.projects)) {
        // Total project count
        setTotalProjects(res.projects.length);

        // Latest project (for recent activity)
        const latestProjects = [...res.projects]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 1);

        setRecentProjects(latestProjects);
      }
    } catch (error) {
      console.error('Failed to fetch projects', error);
    }
  };

  const chartData = [
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

  return (
    <div className="space-y-6 font-figtree">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Projects', value: totalProjects },
          { label: 'Total Available Plots', value: 12 },
          { label: 'Total Inquiry', value: totalEnquiries },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex justify-between"
          >
            <div>
              <div className="p-2 border rounded-md inline-flex">
                <FileText className="text-[#2D5C3A]" size={20} />
              </div>
              <p className="text-3xl font-bold text-[#2D5C3A] mt-2">
                {card.value}
              </p>
              <p className="text-gray-600 text-sm">{card.label}</p>
            </div>
            <div className="text-[#2D5C3A] flex gap-1 text-sm">
              +2 <ArrowUp size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>

        <div className="space-y-5">
          {recentEnquiries.length === 0 ? (
            <p className="text-center text-gray-500">No recent enquiries</p>
          ) : (
            recentEnquiries.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border-b pb-4 last:border-0"
              >
                <div className="flex gap-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <PhoneCall className="text-[#2D5C3A]" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Recent Enquiry for {item.projectType}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.name} · {timeAgo(item.createdAt)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-500">⋮</button>
              </div>
            ))
          )}

          {[
            {
              icon: <MapPin className="text-[#2D5C3A]" size={18} />,
              title: 'Plot A-45 sold in Sunrise Layout',
              name: 'Priya Sharma',
              time: '3 hours ago',
            },
            // {
            //   icon: <Home className="text-[#2D5C3A]" size={18} />,
            //   title: 'New Property “Eden Gardens” added',
            //   name: 'Yash Raj',
            //   time: '23 hours ago',
            // },
          ].map((a, i) => (
            <div
              key={i}
              className="flex justify-between border-b pb-4 last:border-0"
            >
              <div className="flex gap-3">
                <div className="bg-green-100 p-3 rounded-full">{a.icon}</div>
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-gray-500">
                    {a.name} · {a.time}
                  </p>
                </div>
              </div>
              <button className="text-gray-500">⋮</button>
            </div>
          ))}
        </div>
      </div> */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>

        <div className="space-y-5">
          {/* Recent Enquiry */}
          {recentEnquiries.length === 0 ? (
            <p className="text-center text-gray-500">No recent enquiries</p>
          ) : (
            recentEnquiries.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border-b pb-4 last:border-0"
              >
                <div className="flex gap-3">
                  <div className="bg-[#2D5C3A] p-3 rounded-full">
                    <PhoneCall className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Recent Enquiry for {item.projectType}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.name} · {timeAgo(item.createdAt)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-500">⋮</button>
              </div>
            ))
          )}

          {/* Recent Project Added */}
          {recentProjects.length === 0
            ? null
            : recentProjects.map((project) => (
                <div
                  key={project._id}
                  className="flex justify-between border-b pb-4 last:border-0"
                >
                  <div className="flex gap-3">
                    <div className="bg-[#2D5C3A] p-3 rounded-full">
                      <Home className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        New Property added
                      </p>
                      <p className="text-sm text-gray-500">
                        {project.projectName} · {timeAgo(project.createdAt)}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-500">⋮</button>
                </div>
              ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 col-span-2">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">
              Sales <b>Revenue</b>
            </h2>
            <FormControl size="small">
              <Select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <MenuItem value="yearly">Yearly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
              </Select>
            </FormControl>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1e5631"
                fill="#1e5631"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 gap-4">
          {[
            { icon: <FileText />, text: 'Add new Property' },
            { icon: <MapPin />, text: 'Manage Plots' },
            { icon: <Users />, text: 'View Inquiries' },
            { icon: <ImageIcon />, text: 'Upload Media' },
          ].map((b, i) => (
            <button
              key={i}
              className="bg-green-800 text-white py-6 rounded-lg flex flex-col items-center gap-2"
            >
              {b.icon}
              <span className="text-sm">{b.text}</span>
            </button>
          ))}
        </div> */}
        <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 gap-4">
          {[
            {
              icon: <FileText />,
              text: 'Add new Property',
              onClick: () => setShowAddProjectModal(true),
            },
            { icon: <MapPin />, text: 'Manage Plots' },
            // { icon: <Users />, text: 'View Inquiries' },
            {
              icon: <Users />,
              text: 'View Inquiries',
              onClick: () => navigate('/admin/enquiries'),
            },
            {
              icon: <ImageIcon />,
              text: 'Upload Media',
              onClick: () => navigate('/admin/media'),
            },
            // { icon: <ImageIcon />, text: 'Upload Media' },
          ].map((b, i) => (
            <button
              key={i}
              onClick={b.onClick}
              className="bg-[#2D5C3A] text-white py-6 rounded-lg flex flex-col items-center gap-2 hover:bg-green-900 transition"
            >
              {b.icon}
              <span className="text-sm">{b.text}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Project <b>Overviews</b>
        </h2>

        <table className="min-w-full text-sm">
          <thead className="border-b">
            <tr>
              <th>S.no</th>
              <th>Project</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Due</th>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b">
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>
                  <span className="bg-green-800 text-white px-2 py-1 rounded text-xs">
                    {p.status}
                  </span>
                </td>
                <td>
                  <div className="w-32 h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-green-800 rounded"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </td>
                <td>{p.due}</td>
                <td>{p.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddProjectModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90vw] max-w-4xl max-h-[90vh] rounded-xl shadow-2xl relative flex flex-col">
            <button
              onClick={() => setShowAddProjectModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            <div className="overflow-y-auto flex-1">
              <AddProject onClose={() => setShowAddProjectModal(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
