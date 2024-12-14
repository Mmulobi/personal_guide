// Local storage utility functions
const STORAGE_KEYS = {
  TASKS: 'lifetrack_tasks',
  NOTES: 'lifetrack_notes',
  GOALS: 'lifetrack_goals',
};

export const storage = {
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export { STORAGE_KEYS };