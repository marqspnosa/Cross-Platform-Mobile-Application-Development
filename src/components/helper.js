import { CATEGORIES } from "./constant"; 
export const getId = () => {
    return Math.random().toString(36).substr(2, 9); 
};


export const getDate = (date) => {
    if (!date) {
        console.warn('Invalid date provided.');
        return 'Invalid Date'; 
    }
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options); 
};


export const getCategoryColor = (categoryName) => {
    const category = CATEGORIES.find(cat => cat.name === categoryName);
    if (!category) {
        console.warn(`Category not found: ${categoryName}`); 
        return '#d1d5db'; 
    }
    return category.color; 
};