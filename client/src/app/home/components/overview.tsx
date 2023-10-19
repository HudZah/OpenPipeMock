"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    {
      name: "Open AI",
      total: parseFloat("$3,462.49".replace(/[\$,]/g, '')),
    },
    {
      name: "Google Bard",
      total: parseFloat("$2,231.89".replace(/[\$,]/g, '')),
    },
    {
      name: "Meta AI",
      total: parseFloat("$1,231.89".replace(/[\$,]/g, '')),
    },
    {
      name: "Perplexity Labs",
      total: parseFloat("$1,579.84".replace(/[\$,]/g, '')),
    }
  ]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: any) => `$${value}`}
        />
        <Bar dataKey="total" fill="violet" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}