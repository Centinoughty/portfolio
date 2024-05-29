interface ButtonProps {
  onNewPage: boolean;
  download: boolean;
  url: string;
  label: string;
  className: string;
}

export default function Button({
  onNewPage,
  url,
  label,
  className,
  download
}: ButtonProps) {
  return (
    <a
      download={download}
      href={url}
      className={className}
      target={`${onNewPage ? "_blank" : ""}`}
    >
      {label}
    </a>
  );
}
