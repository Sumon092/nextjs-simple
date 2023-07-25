import DashboardLayout from "../../component/layout/DashboardLayout";
const AdminDashboard = () => {
  return (
    <div>
      <h1>this is admin dashboard</h1>
    </div>
  );
};

export default AdminDashboard;
AdminDashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
