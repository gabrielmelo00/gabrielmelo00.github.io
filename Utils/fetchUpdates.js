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
    const firstUpdate = tempDiv.querySelector('article');

    if (firstUpdate) {
      const updateDate = firstUpdate.querySelector('h3').innerText;
      const updateText = firstUpdate.querySelector('p').innerText;
      document.getElementById('latest-update').innerHTML = `
        <strong>${updateDate}</strong><br />
        ${updateText}
      `;
    }
  })
  .catch(error => console.error('Error fetching updates:', error));
