export interface IProps {
  className?: string;
}

export default function VerticalSeparator(props: IProps) {
  return (
    <div
      className={
        "w-16 m-auto border-b-2 border-white" + ` ${props.className || ""}`
      }
    />
  );
}
