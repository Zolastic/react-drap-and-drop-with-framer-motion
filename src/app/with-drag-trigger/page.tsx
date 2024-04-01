"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder, useDragControls } from "framer-motion";
import { Grip } from "lucide-react";
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

  const controls = useDragControls();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, i) => {
          return (
            <Reorder.Item
              value={item}
              key={item.id}
              dragListener={false}
              dragControls={controls}
            >
              <Card className="m-8 flex justify-center items-center p-[8px]">
                <div>
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
                </div>
                <Grip
                  color="#808080"
                  className="hover:cursor-pointer"
                  onPointerDown={(e) => {
                    controls.start(e);
                  }}
                />
              </Card>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </main>
  );
}
