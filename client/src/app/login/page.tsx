import { CardLogin } from '@/app/login/components/cardLogin';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <div className="container relative hidden h-[0px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'absolute right-4 top-4 md:right-8 md:top-8',
            )}
          >
            Sign Up
          </Link>
          <div className="relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
            <div className="relative z-20 flex items-center text-black text-lg font-medium">
              <Image src="/logo.png" width={100} height={30} alt="OpenPipe" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <CardLogin />
      </div>
    </div>
  );
}
