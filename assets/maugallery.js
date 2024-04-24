(function() {
  function mauGallery(element, options) {
    const settings = Object.assign({}, mauGallery.defaults, options);
    const tagsCollection = [];
    
    element.querySelectorAll('.gallery-item').forEach(item => {
      responsiveImageItem(item);
      moveItemInRowWrapper(item);
      wrapItemInColumn(item, settings.columns);
      const theTag = item.dataset.galleryTag;
      if (settings.showTags && theTag !== undefined && tagsCollection.indexOf(theTag) === -1) {
        tagsCollection.push(theTag);
      }
    });
    
    if (settings.showTags) {
      showItemTags(element, settings.tagsPosition, tagsCollection);
    }

    element.style.display = 'block';
  }

  mauGallery.defaults = {
    columns: 3,
    lightBox: true,
    lightboxId: null,
    showTags: true,
    tagsPosition: "bottom",
    navigation: true
  };

  function createRowWrapper(element) {
    if (!element.querySelector('.row')) {
      const rowWrapper = document.createElement('div');
      rowWrapper.className = 'gallery-items-row row';
      element.appendChild(rowWrapper);
    }
  }

  function wrapItemInColumn(element, columns) {
    let columnClasses;
    if (typeof columns === 'number') {
      columnClasses = `col-${Math.ceil(12 / columns)}`;
    } else if (typeof columns === 'object') {
      columnClasses = Object.keys(columns).map(key => {
        return `col-${key}-${Math.ceil(12 / columns[key])}`;
      }).join(' ');
    } else {
      console.error(`Columns should be defined as numbers or objects. ${typeof columns} is not supported.`);
      return;
    }

    const columnWrapper = document.createElement('div');
    columnWrapper.className = `item-column mb-4 ${columnClasses}`;
    element.parentNode.insertBefore(columnWrapper, element);
    columnWrapper.appendChild(element);
  }

  function moveItemInRowWrapper(element) {
    const rowWrapper = element.closest('.gallery-items-row');
    if (rowWrapper) {
      rowWrapper.appendChild(element);
    }
  }

  function responsiveImageItem(element) {
    if (element.tagName === 'IMG') {
      element.classList.add('img-fluid');
    }
  }

  function openLightBox(element, lightboxId) {
    const lightboxImage = document.querySelector(`#${lightboxId} .lightboxImage`);
    lightboxImage.src = element.src;
    const lightbox = document.getElementById(lightboxId);
    if (lightbox) {
      lightbox.classList.toggle('show');
    }
  }

  function prevImage(lightboxId) {
    // Code pour l'action précédente
  }

  function nextImage(lightboxId) {
    // Code pour l'action suivante
  }

  function createLightBox(gallery, lightboxId, navigation) {
    // Code pour créer la Lightbox
  }

  function showItemTags(gallery, position, tags) {
    // Code pour afficher les tags
  }

  function filterByTag() {
    // Code pour filtrer par tag
  }

  window.mauGallery = mauGallery;
})();