"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-[8px] p-24">
      <Link href="/with-no-drag-trigger">
        <Button variant="link">Drag and Drop without drag trigger</Button>
      </Link>
      <Link href="/with-drag-trigger">
        <Button variant="link">Drag and Drop with drag trigger</Button>
      </Link>
    </main>
  );
}
