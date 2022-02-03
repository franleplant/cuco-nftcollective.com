export interface IProps {
  header: () => React.ReactElement;
  footer: (props: { className: string }) => React.ReactElement;
  children: React.ReactElement | Array<React.ReactElement>;
}

export default function Layout(props: IProps) {
  return (
    <>
      <div className="mx-auto px-4 max-w-[700px] box-content">
        {props.header()}
        {props.children}
      </div>
      {props.footer({ className: "mx-auto max-w-[700px] box-content" })}
    </>
  );
}
