import React, { useState } from 'react';
import Sidebar from '../Hero/Sidebar';
import MainContent from '../Hero/MainContent';

export default function HeroPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex min-h-screen ">
      <Sidebar setExpandedState={setExpanded} />
      <MainContent expanded={expanded} />
    </div>
  );
}