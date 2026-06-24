// ===== 详情页面公共脚本 =====

// 禁用右键
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// 移动端点击图片全屏查看
(function() {
  var isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  var galleryImgs = document.querySelectorAll('.detail-gallery img');

  galleryImgs.forEach(function(img) {
    img.addEventListener('click', function() {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === lightboxImg) {
      closeLightbox();
    }
  });

  lightboxClose.addEventListener('click', function(e) {
    e.stopPropagation();
    closeLightbox();
  });
})();
