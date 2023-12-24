import { useEffect, useState } from 'react';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { z } from 'zod';

import { columns } from './columns';
import { DataTable } from './data-table';
import { UserNav } from '../user-nav';
import { taskSchema } from '../../data/datasets/schema';

type Task = {
  name: string;
  createdAt: string;
  models: number;
  size: number;
  status: string;
  sentAt: string;
  model: string;
  duration: number;
  inputTokens: number;
  outputTokens: number;
  cost: number;
};

const tasks: Task[] = [
  {
    name: 'openpipe:slimy-glitchy-join',
    createdAt: 'December 14 11:04 AM',
    models: 6,
    size: 4,
    status: 'completed',
    sentAt: 'December 14 11:04 AM',
    model: 'model1',
    duration: 120,
    inputTokens: 1000,
    outputTokens: 1000,
    cost: 10,
  },
  {
    name: 'openpipe:shiny-glitchy-cut',
    createdAt: 'December 12 02:25 PM',
    models: 7,
    size: 6,
    status: 'completed',
    sentAt: 'December 12 02:25 PM',
    model: 'model2',
    duration: 130,
    inputTokens: 1100,
    outputTokens: 1100,
    cost: 11,
  },
  {
    name: 'openpipe:glitchy-spotted-join',
    createdAt: 'December 15 04:47 PM',
    models: 3,
    size: 3,
    status: 'completed',
    sentAt: 'December 15 04:47 PM',
    model: 'model3',
    duration: 140,
    inputTokens: 1200,
    outputTokens: 1200,
    cost: 12,
  },
  {
    name: 'openpipe:glitchy-shiny-join',
    createdAt: 'December 20 11:42 PM',
    models: 4,
    size: 2,
    status: 'completed',
    sentAt: 'December 20 11:42 PM',
    model: 'model4',
    duration: 150,
    inputTokens: 1300,
    outputTokens: 1300,
    cost: 13,
  },
  {
    name: 'openpipe:spotted-slimy-cut',
    createdAt: 'December 17 11:30 AM',
    models: 1,
    size: 10,
    status: 'completed',
    sentAt: 'December 17 11:30 AM',
    model: 'model5',
    duration: 160,
    inputTokens: 1400,
    outputTokens: 1400,
    cost: 14,
  },
  {
    name: 'openpipe:glitchy-shiny-join',
    createdAt: 'December 14 07:47 PM',
    models: 4,
    size: 4,
    status: 'completed',
    sentAt: 'December 14 07:47 PM',
    model: 'model6',
    duration: 170,
    inputTokens: 1500,
    outputTokens: 1500,
    cost: 15,
  },
  {
    name: 'openpipe:spotted-slimy-cut',
    createdAt: 'December 14 02:47 AM',
    models: 5,
    size: 5,
    status: 'completed',
    sentAt: 'December 14 02:47 AM',
    model: 'model7',
    duration: 180,
    inputTokens: 1600,
    outputTokens: 1600,
    cost: 16,
  },
  {
    name: 'openpipe:shiny-glitchy-join',
    createdAt: 'December 14 02:59 PM',
    models: 1,
    size: 9,
    status: 'completed',
    sentAt: 'December 14 02:59 PM',
    model: 'model8',
    duration: 190,
    inputTokens: 1700,
    outputTokens: 1700,
    cost: 17,
  },
  {
    name: 'openpipe:slimy-slimy-join',
    createdAt: 'December 18 10:02 PM',
    models: 10,
    size: 0,
    status: 'completed',
    sentAt: 'December 18 10:02 PM',
    model: 'model9',
    duration: 200,
    inputTokens: 1800,
    outputTokens: 1800,
    cost: 18,
  },
  {
    name: 'openpipe:slimy-shiny-join',
    createdAt: 'December 18 02:55 AM',
    models: 5,
    size: 1,
    status: 'completed',
    sentAt: 'December 18 02:55 AM',
    model: 'model10',
    duration: 210,
    inputTokens: 1900,
    outputTokens: 1900,
    cost: 19,
  },
];

export default function Datasets() {
  const [parsedTasks, setParsedTasks] = useState<Task[]>([]);

  useEffect(() => {
    setParsedTasks(z.array(taskSchema).parse(tasks));
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
            <h2 className="text-2xl font-bold tracking-tight">Your Datasets</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your datasets!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
