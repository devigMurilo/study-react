import ResponsiveAppBar from './components/Navbar.jsx';
import OutlinedCard from './components/Card.jsx';
import SimpleLineChart from './components/Graficos.jsx';
import BasicSparkLine from './components/Grafico2.jsx';

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <OutlinedCard />
      <SimpleLineChart />
      <BasicSparkLine />
    </div>
  );
}


