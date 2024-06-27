// logic.js
export const fetchData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products'); // Replace with your actual API endpoint or data retrieval logic
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};