interface FooterLinkProps {
  title: string;
  content: { [key: string]: string };
}

export default function FooterLink({ title, content }: FooterLinkProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-[#037667]">{title}</h3>
      <ul className="flex flex-col gap-1      ">
        {Object.keys(content).map((link) => (
          <a key={link} href={content[link]} className=" text-xl px-3" target="_blank">
            {link}
          </a>
        ))}
      </ul>
    </div>
  );
}
