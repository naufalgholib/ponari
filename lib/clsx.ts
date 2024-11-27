type ClassValue = string | number | boolean | undefined | null | ClassObject | ClassArray;

interface ClassObject {
  [key: string]: boolean | string | number | undefined | null;
}

type ClassArray = ClassValue[];

export function clsx(...inputs: ClassValue[]): string {
  function toVal(mix: ClassValue): string {
    if (typeof mix === 'string' || typeof mix === 'number') {
      return String(mix);
    }
    
    if (typeof mix === 'object') {
      if (Array.isArray(mix)) {
        return mix.map(toVal).filter(Boolean).join(' ');
      }
      
      return Object.keys(mix as ClassObject)
        .filter(k => (mix as ClassObject)[k])
        .join(' ');
    }
    
    return '';
  }

  return inputs.map(toVal).filter(Boolean).join(' ');
}
