// 分类模块的瀑布流布局

// 设置节点的点击监听
categoryTitleWrapper.addEventListener('click', event => {
  // 利用事件委托机制给容器设置一个点击监听，再给命中的大分类元素添加active属性
  const categoryElList = document.querySelectorAll('.category')
  categoryElList.forEach(el => {
    el === event.target ? el.classList.add('active') : el.classList.remove('active')
  })

  // 给小分类模块修改active属性
  const subCategoryElList = document.querySelectorAll('.sub-category')
  if (event.target.dataset.category) {
    subCategoryElList.forEach(subCategoryEl => {
      subCategoryEl.dataset.category === event.target.dataset.category ? subCategoryEl.classList.add('active') : subCategoryEl.classList.remove('active')
    })
  }
  setPosition()
  checkSubCategory()
})

// 获取激活状态的小分类模块
const getActiveCategoryEl = () => Array.from(navWrapper.children).filter(subCategoryEl => Array.from(subCategoryEl.classList).includes('active'))
let activeElList

// 每个小分类的宽度
categoryWith = 300

// 计算列数和间隙宽度
const calc = () => {
  const columns = Math.floor(navWrapper.clientWidth / categoryWith)

  const gapCount = columns + 1
  const leftSpace = navWrapper.clientWidth % categoryWith
  const gapWidth = leftSpace / gapCount

  return {
    columns,
    gapWidth
  }
}

const setPosition = () => {
  const { columns, gapWidth } = calc()

  const columnHeight = new Array(columns).fill(0)

  activeElList = getActiveCategoryEl()
  // 遍历每一个小分类，使其填充到最短列的下面
  for (let i = 0; i < activeElList.length; i++) {
    const subCategoryEl = activeElList[i]

    // 确定子分类模块与顶部的距离
    const top = Math.min(...columnHeight)
    subCategoryEl.style.top = top + 'px'

    // 重新设置当前这一列的高度
    const index = columnHeight.indexOf(top)
    columnHeight[index] += subCategoryEl.clientHeight + gapWidth
    
    // 确定子分类模块与左边的距离
    const left = (index + 1) * gapWidth + index * categoryWith
    subCategoryEl.style.left = left + 'px'
  }

  // 设置子分类模块容器的整体高度
  const height = Math.max(...columnHeight)
  navWrapper.style.height = height + 'px'
}

setPosition()

// 监听页面缩放
let timer = null
window.onresize = ()=> {
  if (timer) {
    clearTimeout(timer)
  }
  setTimeout(setPosition, 300)
}



