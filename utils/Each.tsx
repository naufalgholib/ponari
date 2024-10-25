import { Children } from "react";

type EachProps<T> = {
  render: (item: T, index: number) => React.ReactNode;
  of: T[];
};

export default function Each<T>({ render, of }: EachProps<T>) {
  return Children.toArray(of.map((item, index) => render(item, index)));
}
