import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export function Sidebar({
  className,
  navigateTo,
  currentComponent,
}: React.HTMLAttributes<HTMLDivElement> & {
  navigateTo: (component: string) => void;
  currentComponent: string;
}) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Home
          </h2>
          <div className="space-y-1">
            <Button
              variant={currentComponent === '/dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant={currentComponent === '/library' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/library')}
            >
              Library
            </Button>
            <Button
              variant={
                currentComponent === '/marketplace' ? 'default' : 'ghost'
              }
              className="w-full justify-start"
              onClick={() => navigateTo('/marketplace')}
            >
              Marketplace
            </Button>
            <Button
              variant={currentComponent === '/playground' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/playground')}
            >
              Playground
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Account
        </h2>
        <div className="space-y-1">
          <Button
            variant={currentComponent === '/profile' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/profile')}
          >
            Profile
          </Button>
          <Button
            variant={currentComponent === '/settings' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/settings')}
          >
            Settings
          </Button>
          <Button
            variant={
              currentComponent === '/notifications' ? 'default' : 'ghost'
            }
            className="w-full justify-start"
            onClick={() => navigateTo('/notifications')}
          >
            Notifications
          </Button>
          <Button
            variant={currentComponent === '/billing' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/billing')}
          >
            Billing
          </Button>
          <Button
            variant={currentComponent === '/logout' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/logout')}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
