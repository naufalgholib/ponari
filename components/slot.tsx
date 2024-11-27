import * as React from "react";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

type ElementRef = HTMLElement | null;

export const Slot = React.forwardRef<ElementRef, SlotProps>(
  ({ children, ...props }, forwardedRef) => {
    const child = children
      ? (React.Children.only(children) as React.ReactElement)
      : null;
    const ref = useMergeRefs<ElementRef>(
      child
        ? [forwardedRef, child.ref as React.Ref<ElementRef>]
        : [forwardedRef]
    );

    if (!child) {
      return null;
    }

    return React.cloneElement(child, {
      ...mergeProps(child.props, props),
      ref,
    });
  }
);

Slot.displayName = "Slot";

// Improved type safety for ref merging
type PossibleRef<T> =
  | React.RefCallback<T>
  | React.MutableRefObject<T>
  | null
  | undefined;

function useMergeRefs<T extends ElementRef>(
  refs: Array<PossibleRef<T>>
): React.RefCallback<T> {
  return React.useCallback(
    (value: T) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T>).current = value;
        }
      });
    },
    [...refs]
  ); // Spread refs to include each as a dependency
}

// Improved type safety for props merging
type Props = Record<string, unknown>;

function mergeProps(childProps: Props, slotProps: Props): Props {
  const merged = { ...childProps, ...slotProps };

  // Special handling for event handlers
  Object.keys(slotProps).forEach((propName) => {
    if (
      propName.startsWith("on") &&
      typeof slotProps[propName] === "function" &&
      typeof childProps[propName] === "function"
    ) {
      merged[propName] = (...args: unknown[]) => {
        (childProps[propName] as (...args: unknown[]) => void)?.(...args);
        (slotProps[propName] as (...args: unknown[]) => void)?.(...args);
      };
    }
  });

  // Special handling for className
  if (
    typeof childProps.className === "string" &&
    typeof slotProps.className === "string"
  ) {
    merged.className = `${childProps.className} ${slotProps.className}`.trim();
  }

  // Special handling for style
  if (
    childProps.style &&
    slotProps.style &&
    typeof childProps.style === "object" &&
    typeof slotProps.style === "object"
  ) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}
