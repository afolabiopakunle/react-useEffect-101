import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [resourceType, setResourceType] = useState('post');
  return (
    <div>
      <div className="container p-3">
      <div className='btn-group'>
          <button className='btn btn-secondary'>Posts</button>
          <button className='btn btn-warning'>Resources</button>
          <button className='btn btn-danger'>Resources</button>
        </div>
      </div>
    </div>
  );
}
