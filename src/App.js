import React from 'react';
import './style.css';
import Folder from './Components/Folder';
import data from './data';

export default function App() {
  return <Folder data={data} />;
}
