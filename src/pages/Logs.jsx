import logsData from "./logsData";

const Logs = () => {
  const highCarbonLogs = logsData.filter(log => log.carbon >= 4);
  return (
    <div className="card">
      <h2>High Carbon Activities</h2>
      <ul>
        {highCarbonLogs.map(log => (
          <li key={log.id}>
            <span>{log.activity}</span>
            <span className="high">{log.carbon} Kgs</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
