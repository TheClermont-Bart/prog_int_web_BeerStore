(function () {
    const map = document.getElementById('storeMap');
    const list = document.getElementById('retailerList');
    const items = Array.from(list.querySelectorAll('.retailer-item'));

    function embedUrlFromAddress(address) {
      const q = encodeURIComponent(address);
      return `https://www.google.com/maps?q=${q}&output=embed`;
    }

    function selectRetailer(btn) {
      items.forEach(i => i.classList.remove('active'));
      btn.classList.add('active');

      const address = btn.getAttribute('data-address');
      map.src = embedUrlFromAddress(address);

      map.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    items.forEach(btn => {
      btn.addEventListener('click', () => selectRetailer(btn));
    });

    if (items.length) selectRetailer(items[0]);
  })();