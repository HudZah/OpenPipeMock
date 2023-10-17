import { CardLogin } from '@/app/login/components/cardLogin';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CardLogin />
    </div>
  );
}