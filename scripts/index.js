window.onload = function() {
  var indexItemElements = document.getElementsByClassName('item');
  var anchorElements = document.getElementsByClassName('anchor');

  // Map all the anchor elements.
  var anchorMap = {};
  for (var i = 0; i < anchorElements.length; i++) {
    var anchor = anchorElements[i];
    anchorMap[anchor.id] = anchor;
  }

  // Set up index item onclick listeners.
  var scrollIntoView = function(id) {
    anchorMap[id].scrollIntoView();
  };
  for (var i = 0; i < indexItemElements.length; i++) {
    var indexItemElement = indexItemElements[i];
    indexItemElement.onclick = (function(id) {
      return function() { scrollIntoView(id); }
    })(indexItemElement.id);
  }
}
