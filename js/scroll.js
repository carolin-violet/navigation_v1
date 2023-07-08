// 设置滚动加载特效并且节流优化
const mainEl = document.querySelector('.main')

mainEl.addEventListener('scroll', throttle(checkSubCategory, 100))
checkSubCategory()

function checkSubCategory(t) {
  const triggerBottom = window.innerHeight * 0.8

  activeElList.forEach(subCategoryEl => {
    const top = subCategoryEl.getBoundingClientRect().top
    if (top < triggerBottom) {
      subCategoryEl.classList.add('show')
    } else {
      subCategoryEl.classList.remove('show')
    }
  })
}

// 节流函数
function throttle(fn, delay) {
  let pre = new Date()

  return function() {
    let context = this
    let args = arguments
    let now = +new Date()
    if (now - pre >= delay) {
      fn.apply(context, args)
      pre = new Date()
    }
  }
}