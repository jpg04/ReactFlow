import { useState, useCallback } from 'react';
import ReactFlow, {Background, Controls, applyNodeChanges, applyEdgeChanges, Handle}  from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';

import TextUpdaterNode from './Components/TextUpdaterNode';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [variant, setVariant] = useState('lines');

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <>
    <ReactFlow 
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
    >
      
      <Background variant={variant} color={'green'} gap={'50'}/>
      <Controls/>
      <Handle/>
    </ReactFlow>
    </>
  );
}

export default App;
