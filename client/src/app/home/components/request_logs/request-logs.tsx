import { useEffect, useState } from 'react';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { z } from 'zod';

import { columns } from './columns';
import { DataTable } from './data-table';
import { UserNav } from '../user-nav';
import { taskSchema } from '../../data/request_logs/schema';

type Task = {
  sentAt: string;
  model: string;
  duration: number;
  inputTokens: number;
  outputTokens: number;
  cost: number;
  status: string;
};

const tasks = [
  {
    sentAt: 'December 14 11:04 AM',
    model: 'openpipe:slimy-glitchy-join',
    duration: '0.80s',
    inputTokens: 6,
    outputTokens: 4,
    cost: 1,
    status: 500,
  },
  {
    sentAt: 'December 12 02:25 PM',
    model: 'openpipe:shiny-glitchy-cut',
    duration: '0.45s',
    inputTokens: 7,
    outputTokens: 6,
    cost: 4,
    status: 400,
  },
  {
    sentAt: 'December 15 04:47 PM',
    model: 'openpipe:glitchy-spotted-join',
    duration: '0.87s',
    inputTokens: 3,
    outputTokens: 3,
    cost: 5,
    status: 200,
  },
  {
    sentAt: 'December 20 11:42 PM',
    model: 'openpipe:glitchy-shiny-join',
    duration: '0.28s',
    inputTokens: 4,
    outputTokens: 2,
    cost: 0,
    status: 500,
  },
  {
    sentAt: 'December 17 11:30 AM',
    model: 'openpipe:spotted-slimy-cut',
    duration: '0.40s',
    inputTokens: 1,
    outputTokens: 10,
    cost: 1,
    status: 200,
  },
  {
    sentAt: 'December 14 07:47 PM',
    model: 'openpipe:glitchy-shiny-join',
    duration: '0.52s',
    inputTokens: 4,
    outputTokens: 4,
    cost: 0,
    status: 400,
  },
  {
    sentAt: 'December 14 02:47 AM',
    model: 'openpipe:spotted-slimy-cut',
    duration: '0.22s',
    inputTokens: 5,
    outputTokens: 5,
    cost: 1,
    status: 200,
  },
  {
    sentAt: 'December 14 02:59 PM',
    model: 'openpipe:shiny-glitchy-join',
    duration: '0.67s',
    inputTokens: 1,
    outputTokens: 9,
    cost: 2,
    status: 400,
  },
  {
    sentAt: 'December 18 10:02 PM',
    model: 'openpipe:slimy-slimy-join',
    duration: '0.83s',
    inputTokens: 10,
    outputTokens: 0,
    cost: 0,
    status: 500,
  },
  {
    sentAt: 'December 18 02:55 AM',
    model: 'openpipe:slimy-shiny-join',
    duration: '0.71s',
    inputTokens: 5,
    outputTokens: 1,
    cost: 0,
    status: 500,
  },
];

export default function RequestLogs() {
  const [parsedTasks, setParsedTasks] = useState<Task[]>([]);

  const transformedTasks = tasks.map((task) => ({
    sentAt: task.sentAt,
    model: task.model,
    duration: parseFloat(task.duration),
    inputTokens: task.inputTokens,
    outputTokens: task.outputTokens,
    cost: task.cost,
    status: task.status.toString(),
  }));

  useEffect(() => {
    setParsedTasks(z.array(taskSchema).parse(transformedTasks));
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
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
