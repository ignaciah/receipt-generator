export default {
  async fetch() {
    const receipt = {
      id: "REC-" + Date.now(),
      timestamp: new Date().toISOString(),
      items: [
        { name: "Item A", price: 12.99 },
        { name: "Item B", price: 4.50 }
      ],
      total: 17.49
    };

    return new Response(JSON.stringify(receipt), {
      headers: { "Content-Type": "application/json" }
    });
  }
};

