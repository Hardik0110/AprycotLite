import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import MainContent from '../common/MainContent';

export default function MainPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex min-h-screen ">
      <Sidebar setExpandedState={setExpanded} />
      <MainContent expanded={expanded} />
    </div>
  );
}