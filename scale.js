var $wrapper = $("#wrapper");
$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {
    console.log("doResize function called");
  var scale = ui.size.width / $wrapper.width();
  $wrapper.css({
    transform: "scale(" + scale + ")"
  });

  // Adjust the number of flex items per row based on the scaled width
  var numberOfItemsPerRow = Math.floor($wrapper.width() / $wrapper.find('.flex-item').outerWidth(true));
  $wrapper.find('.flex-container').css('flex-wrap', 'wrap');
  $wrapper.find('.flex-item').css('width', 'calc(50% - 15px)');
  if (numberOfItemsPerRow === 1) {
    $wrapper.find('.flex-container').css('flex-wrap', 'nowrap');
    $wrapper.find('.flex-item').css('width', '100%');
  }
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
};
doResize(null, starterData);
console.log($wrapper.height);
