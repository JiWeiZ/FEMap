let imgList = document.querySelector('#list')
let imgs = document.querySelectorAll('#list img')
let previewMask = document.querySelector('.mask')
let previewImg = document.querySelector('#preview-img')
let previewPrevious = document.querySelector('#preview-previous')
let previewNext = document.querySelector('#preview-next')

function setPreviewBehavior(subjects) {
  if (!Array.isArray(subjects)) {
    subjects = subjects.length ? Array.from(subjects) : [subjects]
  }
  const previewEvent = document.createEvent('Event')
  previewEvent.initEvent('preview', true, true)
  previewEvent.previewTargets = subjects.map(sub => sub.src)
  subjects.forEach(sub => sub.preview = () => sub.dispatchEvent(previewEvent))
}
setPreviewBehavior(imgs)


previewMask.onclick = e => {
  if (e.target === previewMask) previewMask.style.display = 'none'
}

imgList.addEventListener('click', e => {
  if (e.target.preview) e.target.preview()
})

imgList.addEventListener('preview', e => {
  let src = e.target.src,
      imgs = e.previewTargets,
      idx = imgs.indexOf(src)

  previewMask.style.display = 'block'
  previewImg.src = src

  function updateBottoms(idx) {
    previewPrevious.style.display = idx ? 'block' : 'none'
    previewNext.style.display = idx < imgs.length - 1 ? 'block' : 'none'
  }

  updateBottoms(idx)
  previewPrevious.onclick = e => {
    previewImg.src = imgs[--idx]
    updateBottoms(idx)
  }
  previewNext.onclick = e => {
    previewImg.src = imgs[++idx]
    updateBottoms(idx)
  }

})
