import { useState type ReactNode} from 'react';

type PanelProps = {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
};

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Alamty,karate</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        with a population
      </Panel>

      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        {' '}
        with a children
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
