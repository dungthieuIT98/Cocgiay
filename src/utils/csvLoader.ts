export async function loadCSV<T>(path: string): Promise<T[]> {
  try {
    const response = await fetch(path);
    const text = await response.text();
    
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.trim());
    const data: T[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
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
