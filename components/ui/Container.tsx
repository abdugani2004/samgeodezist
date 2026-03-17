import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="section-shell">{children}</div>;
}
