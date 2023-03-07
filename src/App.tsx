import React from 'react';
import './css/App.css';
import FlowingText from './components/FlowingText';
import PhotoGridView from './components/PhotoGridView';

export default function App() {
  return (
    <div>
      <FlowingText />
      <PhotoGridView />
    </div>
  );
}