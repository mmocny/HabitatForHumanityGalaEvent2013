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

  // Highlight the first index item.
  var highlightIndexItem = function(i) {
    indexItemElements[i].style.fontWeight = "bold";
  }
  var unhighlightIndexItem = function(i) {
    indexItemElements[i].style.fontWeight = "normal";
  }
  highlightIndexItem(0);

  // Set up a wall text onscroll listener.
  var wallTextElement = document.getElementsByClassName('text')[0];
  wallTextElement.onscroll = function() {
    var scrollPosition = wallTextElement.scrollTop;
    var topOfNextElement = 0;
    var topElementIndex = -1;
    for (var i = 0; i < anchorElements.length; i++) {
      topOfNextElement += anchorElements[i].offsetHeight;
      if (topOfNextElement > scrollPosition) {
        topElementIndex = i;
        break;
      }
    }

    // Do whatever we need to do.
    for (var i = 0; i < indexItemElements.length; i++) {
      if (i === topElementIndex) {
        highlightIndexItem(i);
      } else {
        unhighlightIndexItem(i);
      }
    }
  }
}

