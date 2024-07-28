export const setItem = (key: string, data: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(
      `Error saving data: ${error instanceof Error ? error.message : error}`
    );
  }
};

export const getItem = (key: string): any | null => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(
      `Error getting data: ${error instanceof Error ? error.message : error}`
    );
    return null;
  }
};

export const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Error removing data: ${error instanceof Error ? error.message : error}`
    );
  }
};
