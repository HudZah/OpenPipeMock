import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Library,
  Store,
  FlaskConical,
  User,
  Settings,
  Bell,
  CreditCard,
  LogOut,
} from 'lucide-react';
import { useEffect } from 'react';

export default function Sidebar({
  className,
  navigateTo,
  currentComponent,
}: React.HTMLAttributes<HTMLDivElement> & {
  navigateTo: (component: string) => void;
  currentComponent: string;
}) {
  useEffect(() => {
    navigateTo('/dashboard');
  }, []);

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Home
          </h2>
          <div className="space-y-1">
            <Button
              variant={
                currentComponent === '/request-logs' ? 'default' : 'ghost'
              }
              className="w-full justify-start"
              onClick={() => navigateTo('/request-logs')}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Request Logs
            </Button>
            <Button
              variant={currentComponent === '/datasets' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/datasets')}
            >
              <Library className="mr-2 h-4 w-4" />
              Datasets
            </Button>
            <Button
              variant={currentComponent === '/finetunes' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/finetunes')}
            >
              <Store className="mr-2 h-4 w-4" />
              Fine Tunes
            </Button>
            <Button
              variant={currentComponent === '/playground' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/playground')}
            >
              <FlaskConical className="mr-2 h-4 w-4" />
              Evals
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Configuration
        </h2>
        <div className="space-y-1">
          <Button
            variant={currentComponent === '/settings' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/settings')}
          >
            <Settings className="mr-2 h-4 w-4" />
            Project Settings
          </Button>
          <Button
            variant={currentComponent === '/dashboard' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/dashboard')}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Usage
          </Button>
        </div>
      </div>
    </div>
  );
}
