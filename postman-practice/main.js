$.ajax({
    url: "https://api.github.com/repos/nss-day-cohort-22/movie-history-unaccountable-baboons/commits",
    context: document.body
  }).done(function() {
    $( this ).addClass( "done" );
  });