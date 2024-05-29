import { chat } from "@/data/chat";

export default function Chat() {
  return (
    <ul className="flex flex-col">
      {chat.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}
