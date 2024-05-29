import { footerConnectLinks, footerSocialLinks } from "@/data/content";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col-reverse gap-8 justify-between font-mont w-3/4 items-center md:flex-row">
        <p className="text-2xl font-semibold">© 2024 Nadeem M Siyam</p>
        <div className="flex gap-8">
          <FooterLink title="Elsewhere" content={footerSocialLinks} />
          <FooterLink title="Connect" content={footerConnectLinks} />
        </div>
      </div>
    </footer>
  );
}
