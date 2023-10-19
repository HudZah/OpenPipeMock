"use client";
import React, { useEffect } from 'react';
import { CardLogin } from '@/app/login/components/cardLogin';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return <></>;
}
