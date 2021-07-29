export function drawNode(graph: any) {
  return graph.createNode({
    width: 100,
    height: 40,
    attrs: {
      label: {
        text: 'Rect',
        fill: '#6a6c8a',
      },
      body: {
        stroke: '#31d0c6',
        strokeWidth: 2,
      },
    },
  })
}

export function drawCube(graph: any) {
  return graph.createNode({
    width: 60,
    height: 60,
    shape: 'html',
    html: () => {
      const wrap = document.createElement('div')
      wrap.style.width = '100%'
      wrap.style.height = '100%'
      wrap.style.display = 'flex'
      wrap.style.alignItems = 'center'
      wrap.style.justifyContent = 'center'
      wrap.style.border = '2px solid rgb(49, 208, 198)'
      wrap.style.background = '#fff'
      wrap.style.borderRadius = '100%'
      wrap.innerText = 'Circle'
      return wrap
    },
  })
}