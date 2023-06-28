// 设置滚动加载特效并且节流优化
const mainEl = document.querySelector('.main')

mainEl.addEventListener('scroll', checkSubCategory)
checkSubCategory()

function checkSubCategory() {
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