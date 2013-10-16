!function() {
var timelineData = [
{
  title: '25th Anniversary Gala',
  year: '2013'
}, {
  title: 'Terry Ann Thompson',
  year: '2012',
  familyStory: true
}, {
  title: '1st Condominium Project (Cherry St)',
  year: '2006-2009'
}, {
  title: 'Cambridge ReStore Opens',
  year: '2005'
}, {
  title: 'Pam and Roger Cruz',
  year: '2003',
  familyStory: true
}, {
  title: 'HFHWR hosts 1st Women Build',
  year: '2000'
}, {
  title: '1st Annual Charity Golf Tourney',
  year: '1998'
}, {
  title: '1st Build Cambridge',
  year: '1996'
}, {
  title: 'Jimmy Carter Work Project',
  year: '1993'
}, {
  title: 'Opening ReStore Waterloo',
  year: '1993'
}, {
  title: 'Ellie and Ken Fields',
  year: '1992',
  familyStory: true
}, {
  title: 'HFHWR is Incorporated',
  year: '1988',
}];

var dotEls = [];
var yearEls = [];
var activeDotIndex = -1;
var kTimelinePaddingPercent = 8;

function timelineInit() {
  var container = document.getElementsByClassName('timeline-line-container')[0];
  var template = container.firstElementChild;
  container.removeChild(template);

  for (var i = 0; i < timelineData.length; ++i) {
    var entry = timelineData[i];
    var leftPercent = (kTimelinePaddingPercent + (100-kTimelinePaddingPercent) * i / timelineData.length) + '%';
    var node = template.cloneNode(true);
    dotEls.push(node);
    dotEls[i].style.left = leftPercent;
    dotEls[i].ontouchstart = onTimelineDotClick.bind(null, i);
    dotEls[i].onmousedown = onTimelineDotClick.bind(null, i);
    if (entry.familyStory) {
      dotEls[i].classList.add('timeline-dot-family');
    }
    yearEls.push(node.firstElementChild);
    yearEls[i].firstElementChild.textContent = entry.year;
    container.appendChild(node);
  }

  onTimelineDotClick(0);
}

function onTimelineDotClick(dotIndex) {
  if (dotIndex === activeDotIndex)
    return;

  if (activeDotIndex >= 0) {
    dotEls[activeDotIndex].classList.remove('timeline-dot-active');
    yearEls[activeDotIndex].style.display = 'none';
  }

  activeDotIndex = dotIndex;

  setTimeout(function() {
    dotEls[activeDotIndex].classList.add('timeline-dot-active');
  }, 0);
  yearEls[activeDotIndex].style.display = '';

  document.getElementById('title').textContent = timelineData[activeDotIndex].title;
}

document.addEventListener('DOMContentLoaded', timelineInit);
}()
