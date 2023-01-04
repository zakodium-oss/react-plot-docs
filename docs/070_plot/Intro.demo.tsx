import React from 'react';
import PlotDemo from './Plot.demo';
import PlotObjectDemo from './PlotObject.demo';

export default function Intro() {
  return (
    <div style={{ display: 'flex', gap: '3rem' }}>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PlotDemo />
        <h3>Plot component</h3>
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PlotObjectDemo />
        <h3>PlotObject component</h3>
      </div>
    </div>
  );
}
