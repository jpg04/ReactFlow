import ReactFlow, {Background, Controls}  from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';

function App() {
  return (
    <>
    <ReactFlow>
      <Background/>
      <Controls/>
    </ReactFlow>
    </>
  );
}

export default App;