import'./index.css';
import Dashboard from './pages/Dashboard';
import Logs from './pages/Logs';
import Header from './components/Header';
function App() {
    return (
        <div className="app-container"> 
        <Header title="Carbon FootPrint Tracker"/>
        <main className="content">
        <Dashboard/>
        <Logs/>
        </main>
        </div>
    );
}
export default App;