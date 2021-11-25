let allLikes = document.querySelectorAll('.places__like');

for (let i = 0; i < allLikes.length; i++) {
  const likeIcon = allLikes[i];
  
  likeIcon.addEventListener('click', function() {
    if (likeIcon.getAttribute('src') == './images/like.svg') likeIcon.setAttribute('src', './images/black-like.svg');
    else likeIcon.setAttribute('src', './images/like.svg');
  })
}
