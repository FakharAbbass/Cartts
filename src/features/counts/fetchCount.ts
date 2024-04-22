const fetchCounts = async () => {
  try {
    const response = await fetch("your_api_endpoint_here");
    if (!response.ok) {
      throw new Error("Failed to fetch counts data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching counts data:", error);
    throw error;
  }
};

export default fetchCounts;
