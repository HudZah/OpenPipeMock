import { useEffect, useState } from 'react';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { z } from 'zod';

import { columns } from './columns';
import { DataTable } from './data-table';
import { UserNav } from '../user-nav';
import { taskSchema } from '../../data/fine_tunes/schema';

type FineTune = {
  id: string;
  createdAt: string;
  baseModel: string;
  trainingSize: number;
  dataset: string;
  status: string;
  sentAt: string;
  model: string;
  duration: number;
  inputTokens: number;
  outputTokens: number;
  cost: number;
};

const fineTunes: FineTune[] = [
  {
    id: 'openpipe:chubby-shoes-grab',
    createdAt: 'December 14 11:04 AM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 14 11:04 AM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:shiny-glitchy-cut',
    createdAt: 'December 12 02:25 PM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 12 02:25 PM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:glitchy-spotted-join',
    createdAt: 'December 15 04:47 PM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 15 04:47 PM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:glitchy-shiny-join',
    createdAt: 'December 20 11:42 PM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 20 11:42 PM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:spotted-slimy-cut',
    createdAt: 'December 17 11:30 AM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 17 11:30 AM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:glitchy-shiny-join',
    createdAt: 'December 14 07:47 PM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 14 07:47 PM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:spotted-slimy-cut',
    createdAt: 'December 14 02:47 AM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 14 02:47 AM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:shiny-glitchy-join',
    createdAt: 'December 14 02:59 PM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 14 02:59 PM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:slimy-slimy-join',
    createdAt: 'December 18 10:02 PM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 18 10:02 PM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
  {
    id: 'openpipe:slimy-shiny-join',
    createdAt: 'December 18 02:55 AM',
    baseModel: 'GPT 3.5 TURBO',
    trainingSize: 80,
    dataset: 'recipes',
    status: 'DEPLOYED',
    sentAt: 'December 18 02:55 AM',
    model: 'GPT 3.5 TURBO',
    duration: 80,
    inputTokens: 80,
    outputTokens: 80,
    cost: 80,
  },
];

export default function FineTunes() {
  const [parsedTasks, setParsedTasks] = useState<FineTune[]>([]);

  useEffect(() => {
    setParsedTasks(z.array(taskSchema).parse(parsedTasks));
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your logs!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={fineTunes} columns={columns} />
      </div>
    </>
  );
}
