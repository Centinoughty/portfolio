import { chats } from "@/data/chats";

export default function Chat() {
  return (
    <div className="flex flex-col items-center">
      <ul className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] flex flex-col">
        {chats.map((currentChat, index) => {
          const nextChat = index < chats.length - 1 ? chats[index + 1] : null;

          return (
            <li
              key={currentChat[0]}
              className={`px-2 py-1 my-[2px] text-left rounded-xl max-w-[300px] ${
                currentChat[1] === "l"
                  ? nextChat && nextChat[1] === "l"
                    ? "rounded-lg self-start bg-white"
                    : "rounded-lg rounded-bl-none self-start bg-white mb-4"
                  : nextChat && nextChat[1] === "r"
                  ? "self-end bg-[#dcf8c6]"
                  : "rounded-br-none self-end bg-[#dcf8c6]"
              }`}
            >
              {currentChat[2]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
