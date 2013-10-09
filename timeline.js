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

var dotEls;
var titleEls;
var yearEls;
var activeDotIndex = -1;

function timelineInit() {
  dotEls = [].slice.call(document.getElementsByClassName('timeline-dot-container'));
  titleEls = [].slice.call(document.getElementsByClassName('timeline-title'));
  yearEls = [].slice.call(document.getElementsByClassName('timeline-year-container'));

  for (var i = 0; i < timelineData.length; ++i) {
    var entry = timelineData[i];
    var leftPercent = (10 + 80 * i / timelineData.length) + '%';
    titleEls[i].textContent = entry.title;
    dotEls[i].style.left = leftPercent;
    dotEls[i].ontouchstart = onTimelineDotClick.bind(null, i);
    dotEls[i].onmousedown = onTimelineDotClick.bind(null, i);
    yearEls[i].firstChild.textContent = entry.year;
    if (entry.familyStory) {
      dotEls[i].classList.add('timeline-dot-family');
    }
  }

  document.querySelector('.timeline-title-container').addEventListener('webkitTransitionEnd', onTitleTransitionEnd, false);
  onTimelineDotClick(0);
}

function onTitleTransitionEnd(e) {
  if (e.target.classList.contains('timeline-title-inactive')) {
    e.target.classList.remove('timeline-title-active');
    e.target.classList.remove('timeline-title-inactive');
    e.target.style.display='none';
  }
}

function onTimelineDotClick(dotIndex) {
  if (dotIndex == activeDotIndex) {
    return;
  }
  if (activeDotIndex >= 0) {
    dotEls[activeDotIndex].classList.remove('timeline-dot-active');
    titleEls[activeDotIndex].classList.add('timeline-title-inactive');
    yearEls[activeDotIndex].style.display = 'none';
  }

  setTimeout(function() {
    titleEls[dotIndex].classList.add('timeline-title-active');
    dotEls[dotIndex].classList.add('timeline-dot-active');
  }, 0);
  titleEls[dotIndex].style.display='';
  yearEls[dotIndex].style.display = '';

  activeDotIndex = dotIndex;
}

timelineInit();
}()
