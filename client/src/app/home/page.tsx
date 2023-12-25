'use client';

import React, { lazy, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const Sidebar = lazy(() => import('@/app/home/components/sidebar'));
const Playground = lazy(() => import('./components/playground'));
const Topbar = lazy(() => import('./components/topbar'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Datasets = lazy(() => import('./components/datasets/datasets'));
const FineTunes = lazy(() => import('./components/fine_tunes/fine_tunes'));
const RequestLogs = lazy(
  () => import('./components/request_logs/request-logs'),
);

export default function HomePage() {
  const [currentComponent, setCurrentComponent] = useState('dashboard');

  let Component = Playground; // default component
  switch (currentComponent) {
    case '/dashboard':
      Component = Dashboard;
      break;
    case '/datasets':
      Component = Datasets;
      break;
    case '/finetunes':
      Component = FineTunes;
      break;

    case '/playground':
      Component = Playground;
      break;

    case '/request-logs':
      Component = RequestLogs;
      break;

    default:
      Component = Dashboard; // default component
      console.log(currentComponent);
      break;
  }

  const handleNavigation = (component: string) => {
    setCurrentComponent(component);
  };

  return (
    <div className="hidden md:block">
      <Topbar />
      <div className="grid lg:grid-cols-7">
        <Sidebar
          className="hidden lg:block"
          navigateTo={handleNavigation}
          currentComponent={currentComponent}
        />
        <div className="col-span-6 lg:border-l">
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
