import React, { useEffect, useRef, useState } from 'react';
import { Graph } from '@antv/x6';
import styles from './index.module.scss';
import SideBar from './sidebar';

export default function Editor() {
  const [graph, setGraph] = useState<any>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (graphRef.current) {
      const graphEl = new Graph({
        container: graphRef.current,
        height: 500,
        grid: true,
        history: true,
        snapline: {
          enabled: true,
          sharp: true,
        },
        scroller: {
          enabled: true,
          pageVisible: false,
          pageBreak: false,
          pannable: true,
        },
        mousewheel: {
          enabled: true,
          modifiers: ['ctrl', 'meta'],
        },
      });
      setGraph(graphEl);
    }
  }, [])
  return (
    <div className={styles.container}>
      {graph ? <SideBar graph={graph} /> : null }
      <div className={styles.editor} ref={graphRef}></div>
    </div>
  );
}
