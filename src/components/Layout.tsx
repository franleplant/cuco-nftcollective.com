export interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

export default function Layout(props: IProps) {
  return (
    <div className="mx-auto px-4 max-w-[700px] box-content">
      {props.children}
    </div>
  );
}
