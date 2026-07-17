const homeGrid=document.querySelector('#productos .product-grid');
if(homeGrid&&window.naihoCatalog){
  const categoryClass=p=>p.category==='Refrigeradores'?'refrigeradores':`cocinas ${p.specs[0].charAt(0)}-hornallas`;
  homeGrid.classList.add('catalog-grid');
  homeGrid.innerHTML=window.naihoCatalog.map((p,i)=>`<article class="product-card${i===0?' featured':''}" data-category="${categoryClass(p)}"><div class="product-image real-photo">${i===0?'<span class="badge">DESTACADA</span>':''}<img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-info"><small>${p.category.toUpperCase()}</small><h3>${p.name}</h3><p>${window.naihoDescriptions[p.category]}</p><div class="chips"><span>${p.specs[0]}</span><span>${p.specs[1]}</span></div><a class="card-link" href="producto.html?id=${p.id}">Ver características →</a></div></article>`).join('');
  const heading=document.querySelector('#productos .section-heading h2');
  const intro=document.querySelector('#productos .section-heading p');
  if(heading)heading.textContent='24 modelos para elegir';
  if(intro)intro.textContent='10 refrigeradores y 14 cocinas, cada uno con su ficha completa, capacidad, medidas y funciones.';
}
