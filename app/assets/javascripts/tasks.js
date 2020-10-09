document.addEventListener('turbolinks:load', function() {
  document.querySelectorAll('td').forEach(functin(td) {
  	td.addEventListener('mouseover', function(e) {
  	  e.currentTarget.style.backgroundColor = '#eff';
  	});

  	td.addEventListener('mouseout', function(e) {
  	  e.currentTarget.style.backgroundColor = '';
  	});
  });
};