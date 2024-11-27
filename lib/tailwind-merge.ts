export function twMerge(...classLists: string[]): string {
    const uniqueClasses = new Map<string, string>();
    
    // Split all class strings and process them
    classLists.forEach(classList => {
      const classes = classList.split(' ');
      
      classes.forEach(cls => {
        if (!cls) return;
        
        // Get the base class name (e.g., 'bg' from 'bg-red-500')
        const [baseClass] = cls.split('-');
        
        // If this is a Tailwind utility class, update the map
        if (baseClass) {
          uniqueClasses.set(baseClass, cls);
        } else {
          // For non-utility classes, just keep them
          uniqueClasses.set(cls, cls);
        }
      });
    });
    
    return Array.from(uniqueClasses.values()).join(' ');
  }