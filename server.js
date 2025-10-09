addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Record start time
  const start = performance.now();
  
  // Call the Telegram API (replace <YOUR_BOT_TOKEN> with your actual bot token)
  const apiURL = 'https://api.telegram.org/bot7720434540:AAF1Bfo1wVcpePWZ7gqnJwR0n5P8kqXfwOI/getMe';
  const response = await fetch(apiURL);
  
  // Record end time
  const end = performance.now();
  
  // Calculate the duration in milliseconds
  const duration = end - start;
  
  // Return the measured response time
  return new Response(`Telegram API response time: ${duration.toFixed(2)} ms`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
