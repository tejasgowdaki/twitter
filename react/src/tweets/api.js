export const fetchTweets = async searchKey => {
  try {
    const response = await fetch(
      `http://localhost:4000/tweets?search=${searchKey}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    );

    return await response.json();
  } catch (error) {
    throw error;
  }
};
