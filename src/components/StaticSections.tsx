import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Terminal, ExternalLink, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 text-center">
        <Badge variant="outline">
          <Sparkles data-icon="inline-start" />
          Astro + React + shadcn/ui
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Astro Starter Kit
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg">
          A modern static site boilerplate with Astro, React islands, Tailwind
          CSS v4, and shadcn/ui components. Fast by default, fully type-safe.
        </p>
        <div className="flex gap-3">
          <Button
            render={
              <a
                href="https://docs.astro.build"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
          >
            <Terminal data-icon="inline-start" />
            Get Started
          </Button>
          <Button
            variant="outline"
            render={
              <a
                href="https://github.com/withastro/astro"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
          >
            <ExternalLink data-icon="inline-start" />
            GitHub
          </Button>
        </div>
      </section>

      <Separator />

      <Alert>
        <AlertTitle>Islands Architecture</AlertTitle>
        <AlertDescription>
          This page mixes static React components (hero, alert, stack cards)
          with two interactive React islands — the Counter and Feature Explorer
          — hydrated on the client.
        </AlertDescription>
      </Alert>
    </>
  );
}

export function TechStack() {
  return (
    <>
      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Astro</CardTitle>
              <CardDescription>Static Site Generator</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Zero JS by default. Content-focused with island architecture for
                interactivity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tailwind v4</CardTitle>
              <CardDescription>Utility-First CSS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Lightning-fast CSS engine with native cascade layers and
                simplified config.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
              <CardDescription>Component System</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Accessible, customizable components you own. Built on Base UI
                primitives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="text-muted-foreground mt-auto pt-8 text-center text-sm">
      <Separator className="mb-4" />
      <p>Built with Astro + shadcn/ui — {new Date().getFullYear()}</p>
    </footer>
  );
}
