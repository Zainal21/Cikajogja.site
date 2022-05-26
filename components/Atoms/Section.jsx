import cn from "classnames";
export default function Section({ children, className, ...rest }) {
  return (
    <div className={cn("container", className)} {...rest}>
      {children}
    </div>
  );
}
