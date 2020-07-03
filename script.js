const projects = [
  {
    name: 'fylo-data-storage-component',
  },
  {
    name: 'four-card-feature-section',
  },
  {
    name: 'coding-bootcamp-testimonials-slider',
  },
  {
    name: 'base-apparel-coming-soon',
  },
  {
    name: 'article-preview-component',
  },
  {
    name: 'intro-component-with-signup-form'
  }
];

const list = document.getElementById('list');

projects.forEach(({ name}, i) => {
  const listItem = document.createElement('li')

  listItem.innerHTML = `
      <a href="${name}/index.html">
        <img src="${name}/design/desktop-design.jpg" alt="${name}" />
        <p>${i + 1}. ${formatProjectName(name)}</p>
      </a>
      
      <div class="links-container">
        <a href="${name}/index.html" class="blue">
          <i class="fas fa-eye"></i>
        </a>
        <a href="https://github.com/pbteja1998/frontend-mentor-challenges/tree/master/${name}" class="blue">
          <i class="fas fa-code"></i>
        </a>
      </div>`
  list.appendChild(listItem)
});

const emptyListItem = document.createElement('li')
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)

function formatProjectName(name) {
  return name
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
}
