interface ButtonProps {
  onNewPage: boolean;
  url: string;
  label: string;
  className: string;
}

export default function Button({ onNewPage, url, label, className }: ButtonProps) {
  return (
    <a href={url} className={className} target={`${onNewPage ? '_blank' : ''}`}>
      {label}
    </a>
  );
}
