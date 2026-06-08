fetch('updates.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;
    const updates = Array.from(tempDiv.querySelectorAll('article')).slice(0, 3);

    if (updates.length > 0) {
      document.getElementById('latest-update').innerHTML = updates.map(update => {
        const date = update.querySelector('h3').textContent;
        const text = update.querySelector('p').innerHTML;
        return `<p><strong>${date}</strong><br />${text}</p>`;
      }).join('');
    }
  })
  .catch(error => console.error('Error fetching updates:', error));
