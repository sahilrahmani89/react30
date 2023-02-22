import './App.css';
import React,{Suspense} from 'react';
import { familyTree } from './data';
import User from './compnents/hoc/User';
import Post from './compnents/hoc/Post';




/// lazy loading 
const Problem1 = React.lazy(()=>import('./compnents/Problem1') )
const Problem2  = React.lazy(()=>import('./compnents/Problem2'))
const Problem3 = React.lazy(()=>import('./compnents/Problem3'))
const Problem4 = React.lazy(()=>import('./compnents/Problem4'))
function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>loading...</div>}>
      <Problem1/>
      {/* p1 debouncing */}
        <Problem2/>
        {/* p2 helper */}
        <Problem3 familyTree={familyTree}/> 
         {/*p3 component recursion  */}
        <Problem4 />
        {/*p4 throttle */}
        <User/>
        <Post/>
        {/* hoc */}
      </Suspense>
    </React.Fragment>
  );
}

export default App;
