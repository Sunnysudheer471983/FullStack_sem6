import logsData from "./logsData";

const Dashboard = () => {
  const totalCarbon = logsData.reduce(
    (sum, log) => sum + log.carbon,
    0
  );

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <div className="total">{totalCarbon} Kgs</div>
      <p>Total Carbon Footprint</p>
    </div>
  );
};

export default Dashboard;
