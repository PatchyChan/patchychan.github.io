var origintitle = document.title

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState=='hidden') {//切离该页面时执行
      document.title = "Wait for your return"   
    } 
    else if(document.visibilityState=='visible') {//切换到该页面时执行
      document.title = origintitle
    }
});