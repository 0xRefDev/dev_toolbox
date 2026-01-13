import { atom } from 'nanostores';

const getInitialValue = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
};

export const searchQuery = atom(getInitialValue('search', ''));
export const selectedCategory = atom(getInitialValue('category', 'All'));

if (typeof window !== 'undefined') {
  searchQuery.subscribe((value) => {
    localStorage.setItem('search', value);
  });

  selectedCategory.subscribe((value) => {
    localStorage.setItem('category', value);
  });
}