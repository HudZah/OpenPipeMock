import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

interface ModelCardProps {
  title: string;
  shortDesc: string;
  longDesc: string;
  cost: string;
  likes: string;
}

export function ModelCard({
  title,
  shortDesc,
  longDesc,
  cost,
  likes,
}: ModelCardProps) {
  return (
    <Card
      style={{
        minHeight: '185px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardHeader className="items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{longDesc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {shortDesc}
          </div>
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-green-500 text-green-500" />
            {cost}
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            {likes}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
