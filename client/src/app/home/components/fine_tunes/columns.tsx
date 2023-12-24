'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { labels, priorities, statuses } from '../../data/request_logs/data';
import { Task } from '../../data/request_logs/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => <div>{row.getValue('createdAt')}</div>,
  },
  {
    accessorKey: 'baseModel',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Base Model" />
    ),
    cell: ({ row }) => <div>{row.getValue('baseModel')}</div>,
  },
  {
    accessorKey: 'trainingSize',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Training Size" />
    ),
    cell: ({ row }) => <div>{row.getValue('trainingSize')}</div>,
  },
  {
    accessorKey: 'dataset',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dataset" />
    ),
    cell: ({ row }) => <div>{row.getValue('dataset')}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div>{row.getValue('status')}</div>,
  },
];
