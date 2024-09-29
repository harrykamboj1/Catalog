import { useEffect, useState } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import ContentComponent from './components/ContentComponent';
import HeaderComponent from './components/HeaderComponent';
import TabComponent from './components/TabComponent';
import { generateDataForTab } from './data/data';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState([]);
  const [latestValue, setLatestValue] = useState(null);
  const [diff, setDiff] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = generateDataForTab(activeTab);
      setLatestValue(newData[newData.length - 1]?.value);
      const newDiff = newData[newData.length - 1]?.value - newData[newData.length - 2]?.value;
      setDiff(newDiff);
      setPercentage((newDiff / newData[newData.length - 1]?.value) * 100)
      setData(newData);
    }, 25000);

    const newData = generateDataForTab(activeTab);
    setLatestValue(newData[newData.length - 1]?.value);
    const newDiff = newData[newData.length - 1]?.value - newData[newData.length - 2]?.value;
    setDiff(newDiff);
    setPercentage((newDiff / newData[newData.length - 1]?.value) * 100)
    setData(newData);

    return () => clearInterval(intervalId);
  }, [activeTab]);

  return (
    <div className='px-[60px] h-screen overflow-auto'>
      <HeaderComponent latestValue={latestValue} diff={diff} percentage={percentage} />
      <TabComponent />
      <ContentComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChartComponent data={data} />
    </div>
  );
}

export default App;
