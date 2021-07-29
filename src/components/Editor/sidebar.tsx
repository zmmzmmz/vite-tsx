import React, { useEffect, useState } from 'react';
import { Addon } from '@antv/x6';
import styles from './index.module.scss';
import { drawCube, drawNode } from './shape/draw-node';

const mockList = [
  {
    code: 'start',
    name: '开始',
    type: 'people',
  },
  {
    code: 'transition',
    name: '转移',
    type: 'people',
  },
  {
    code: 'dev',
    name: '开发',
    type: 'strategy',
  },
];
export default function SideBar({ graph }: { graph: any }) {
  const [dnd, setDnd] = useState<any>(null);
  useEffect(() => {
    const dndInstance = new Addon.Dnd({
      target: graph,
      scaled: false,
      animation: true,
      validateNode(droppingNode, options) {
        return droppingNode.shape === 'html'
          ? new Promise<boolean>((resolve) => {
              const { draggingNode, draggingGraph } = options
              const view = draggingGraph.findView(draggingNode)!
              const contentElem = view.findOne('foreignObject > body > div')
              resolve(true)
            })
          : true
      },
    });
    setDnd(dndInstance);
  }, []);
  function handleDrag(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.currentTarget;
    const type = target.getAttribute('data-type');
    const node = type === 'people' ? drawNode(graph) : drawCube(graph);
    dnd.start(node, e.nativeEvent);
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.list}>
        {mockList.map((item) => (
          <div
            className={styles.item}
            key={item.code}
            onMouseDown={handleDrag}
          >
            <div className={styles.itemIcon}></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
