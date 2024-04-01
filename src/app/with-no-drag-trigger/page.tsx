"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      value: "Item 1",
    },
    {
      id: 2,
      value: "Item 2",
    },
    {
      id: 3,
      value: "Item 3",
    },
    {
      id: 4,
      value: "Item 4",
    },
    {
      id: 5,
      value: "Item 5",
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, i) => {
          return (
            <Reorder.Item value={item} key={item.id}>
              <Card className="m-8">
                <CardHeader>
                  <CardTitle>{item.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident eveniet rem, praesentium culpa eaque architecto
                    cum sint incidunt id facere?
                  </p>
                </CardContent>
              </Card>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </main>
  );
}
