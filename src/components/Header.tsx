import Nav from "./Nav";

export interface IProps {}

export default function Header(props: IProps) {
  return (
    <header className="flex flex-row pt-10 text-white gap-2">
      <a href="/">CUCO</a>
      <div aria-hidden className="flex-1"></div>
      <Nav />
    </header>
  );
}
