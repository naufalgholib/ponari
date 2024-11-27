import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// Props untuk Select
interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onValueChange: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Props untuk SelectItem
interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

// State untuk dropdown
interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Buat context untuk Select
const SelectContext = React.createContext<SelectContextType | undefined>(undefined);

// Custom hook untuk menggunakan context Select
const useSelectContext = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a Select component");
  }
  return context;
};

// Komponen Select utama
const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  open: controlledOpen,
  onOpenChange,
  children,
  ...props
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  // Determine whether to use controlled or uncontrolled open state
  const open = controlledOpen ?? uncontrolledOpen;
  
  // Use a function that can handle both controlled and uncontrolled cases
  const setOpen: React.Dispatch<React.SetStateAction<boolean>> = React.useCallback(
    (newState: React.SetStateAction<boolean>) => {
      // If onOpenChange is provided, use it
      if (onOpenChange) {
        // Handle both boolean and function cases
        const resolvedState = typeof newState === 'function'
          ? newState(open)
          : newState;
        onOpenChange(resolvedState);
      } else {
        // For uncontrolled case, use the state setter directly
        setUncontrolledOpen(newState);
      }
    },
    [open, onOpenChange]
  );

  return (
    <SelectContext.Provider 
      value={{ 
        value, 
        onValueChange, 
        open, 
        setOpen 
      }}
    >
      <div 
        className="relative w-full"
        {...props}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

// Komponen SelectTrigger
const SelectTrigger = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useSelectContext();

    return (
      <div
        ref={ref}
        onClick={() => setOpen(prevOpen => !prevOpen)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm",
          "cursor-pointer hover:bg-gray-50",
          "w-full p-2 border rounded-md",
          "focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

// Komponen SelectValue
const SelectValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => {
    const { value } = useSelectContext();

    return (
      <span 
        ref={ref} 
        className={cn(
          "block truncate", 
          className
        )}
        {...props}
      >
        {children || value || "Pilih opsi"}
      </span>
    );
  }
);
SelectValue.displayName = "SelectValue";

// Komponen SelectContent
const SelectContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open } = useSelectContext();

    if (!open) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute z-50 w-full min-w-[8rem] rounded-md border border-gray-200 bg-white shadow-md",
          "mt-1 max-h-60 overflow-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectContent.displayName = "SelectContent";

// Komponen SelectItem
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const { onValueChange, setOpen } = useSelectContext();

    const handleClick = () => {
      onValueChange(value);
      setOpen(false);
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          "px-2 py-1.5 text-sm hover:bg-gray-100 cursor-pointer",
          "focus:bg-gray-100 focus:outline-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };