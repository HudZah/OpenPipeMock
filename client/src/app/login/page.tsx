import { CardLogin } from '@/app/login/components/cardLogin';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              OpenPipe
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
