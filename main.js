$(document).ready(function () {
    $.ajax(
        {
          url: 'https://flynn.boolean.careers/exercises/api/array/music',
          method: "GET",
          success: function(data, stato) {
            printSingleCd(data.response);
          },
          error: function(richiesta, stato, errori) {
            alert('E\' avvenuto un errore.' + errori);
          }
        }
      );
      $(document).on('change', 'select', function() {
        if($('.cd').length > 0) {
          filterCds($('.cd'));
        }
      });
  });
});
