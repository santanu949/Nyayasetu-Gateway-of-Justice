const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/_/backend';

export const queryLegalAI = async (query: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error querying legal AI:', error);
    throw error;
  }
};
