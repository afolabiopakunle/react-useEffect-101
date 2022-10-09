import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  return (
    <div>
      <div className="container p-3">
      <div className='btn-group'>
          <button onClick={()=> setResourceType('posts')} className='btn btn-secondary'>Posts</button>
          <button onClick={()=> setResourceType('users')} className='btn btn-warning'>Users</button>
          <button onClick={()=> setResourceType('comments')} className='btn btn-danger'>Comments</button>
        </div>
        <h2 className='mt-3'>{resourceType}</h2>
      </div>
    </div>
  );
}
