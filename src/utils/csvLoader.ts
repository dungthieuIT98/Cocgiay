// Helper function to resolve paths with BASE_URL
export function resolvePublicPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}

export async function loadCSV<T>(path: string): Promise<T[]> {
  try {
    const fullPath = resolvePublicPath(path);
    const response = await fetch(fullPath);
    if (!response.ok) {
      throw new Error(`Failed to load CSV: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/^\uFEFF/, ''));
    const data: T[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      if (values.length < headers.length) {
        continue;
      }
      const obj: any = {};
      
      headers.forEach((header, index) => {
        const value = values[index];
        // Try to parse as number if it's a numeric value
        if (!isNaN(Number(value)) && value !== '') {
          obj[header] = Number(value);
        } else {
          obj[header] = value;
        }
      });
      
      data.push(obj as T);
    }
    
    return data;
  } catch (error) {
    console.error('Error loading CSV:', error);
    return [];
  }
}
