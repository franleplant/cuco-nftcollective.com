// TODO move elsewhere
import { LINKS } from "./Nav";

export interface IProps {
  className?: string;
}

export default function Footer(props: IProps) {
  return (
    <footer className="px-4 py-4 bg-cuco-blue-500 md:px-0">
      <div className={props.className}>
        <nav className="flex flex-row flex-wrap text-white gap-2">
          <a href="/" className="flex-1 md:flex-auto">
            CUCO
          </a>
          <div className="flex-1" aria-hidden />

          {LINKS.map((link, index) => {
            return (
              <a key={index} href={link.href} className={`p-3 border-white`}>
                {link.label}
              </a>
            );
          })}

          <div className="flex-1" aria-hidden />

          <a href="/">Up</a>
          <div className="flex-1" aria-hidden />

          <a href="/">designed by @estudiopucara</a>
        </nav>
      </div>
    </footer>
  );
}
