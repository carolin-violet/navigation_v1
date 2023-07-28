// 设置滚动加载特效并且节流优化
const mainEl = document.querySelector('.main')

mainEl.addEventListener('scroll', throttle(event => checkSubCategory(event), 100))
checkSubCategory()

function checkSubCategory(...arguments) {
  console.log(arguments);
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
  let flag = true

  return function (...args) {
    if (!flag) return;

    flag = false

    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}