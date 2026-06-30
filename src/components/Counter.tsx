import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Minus, Plus, RotateCcw } from 'lucide-react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Counter</CardTitle>
        <CardDescription>
          A client-side React component with state management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCount((c) => c - 1)}
            >
              <Minus data-icon="inline-start" />
            </Button>
            <span className="text-4xl font-bold tabular-nums">{count}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCount((c) => c + 1)}
            >
              <Plus data-icon="inline-start" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setCount(0)}>
            <RotateCcw data-icon="inline-start" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
