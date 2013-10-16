!function() {
var timelineData = [
{
  title: '25th Anniversary Gala',
  year: '2013',
  hash: '/wall/gala',
}, {
  title: 'Terry Ann Thompson',
  year: '2012',
  familyStory: true,
  hash: '/gallery/family_thompson',
}, {
  title: '1st Condominium Project (Cherry St)',
  year: '2006-2009',
  hash: '/wall/first_condo',
}, {
  title: 'Cambridge ReStore Opens',
  year: '2005',
  hash: '/wall/restore_cambridge',
}, {
  title: 'Pam and Roger Cruz',
  year: '2003',
  familyStory: true,
  hash: '/gallery/family_cruz',
}, {
  title: 'HFHWR hosts 1st Women Build',
  year: '2000',
  hash: '/wall/first_build_women',
}, {
  title: '1st Annual Charity Golf Tourney',
  year: '1998',
  hash: '/gallery/first_golf',
}, {
  title: '1st Build Cambridge',
  year: '1996',
  hash: '/gallery/first_build_cambridge',
}, {
  title: 'Jimmy Carter Work Project',
  year: '1993',
  hash: '/wall/jimmy',
}, {
  title: 'Opening ReStore Waterloo',
  year: '1993',
  hash: '/wall/restore_waterloo',
}, {
  title: 'Ellie and Ken Fields',
  year: '1992',
  familyStory: true,
  hash: '/gallery/family_fields',
}, {
  title: 'HFHWR is Incorporated',
  year: '1988',
  hash: '/wall/incorporated',
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
  window.location.hash = timelineData[activeDotIndex].hash;
}

document.addEventListener('DOMContentLoaded', timelineInit);
}()
