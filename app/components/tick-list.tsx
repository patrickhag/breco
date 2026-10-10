import { Check } from "lucide-react";

export default function TickList({ items }: { items: string[] }) {
  return (
    <ul className="tick-list">
      {items.map((x) => (
        <li key={x}>
          <Check size={14} />
          {x}
        </li>
      ))}
    </ul>
  );
}
