var origintitle = document.title;

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState=='hidden') {
      document.title = "UwU";
    } 
    else if(document.visibilityState=='visible') {
      document.title = origintitle;
    }
  }
);