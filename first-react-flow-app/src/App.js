import { useState } from 'react';
import ReactFlow, {Background, Controls}  from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';

function App() {
  const [variant, setVariant] = useState('lines');
  return (
    <>
    <ReactFlow>
      <Background variant={variant} color={'green'} gap={'50'}/>
      <Controls/>
    </ReactFlow>
    </>
  );
}

export default App;
