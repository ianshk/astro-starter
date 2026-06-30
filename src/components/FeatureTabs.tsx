import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast by Default',
    badge: 'Performance',
    description:
      'Astro ships zero JavaScript by default. Only the components you mark as interactive get hydrated on the client.',
  },
  {
    icon: Zap,
    title: 'Component Islands',
    badge: 'Architecture',
    description:
      'Mix static and dynamic components freely. Use React, Vue, Svelte, or any framework side by side.',
  },
  {
    icon: Shield,
    title: 'Type-Safe',
    badge: 'DX',
    description:
      'Full TypeScript support out of the box with strict type checking for props, content collections, and more.',
  },
];

export function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Explorer</CardTitle>
        <CardDescription>
          Click to explore each feature — another interactive React component
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {features.map((feature, index) => (
              <Button
                key={feature.title}
                variant={index === activeIndex ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveIndex(index)}
              >
                <feature.icon data-icon="inline-start" />
                {feature.title}
              </Button>
            ))}
          </div>
          <div className="bg-muted/50 flex flex-col gap-2 rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <active.icon data-icon="inline-start" />
              <span className="font-semibold">{active.title}</span>
              <Badge variant="secondary">{active.badge}</Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              {active.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
