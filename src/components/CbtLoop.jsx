import { BrainIcon, HeartIcon, PersonIcon } from './Icons'

export default function CbtLoop() {
  return (
    <div className="cbt-loop" aria-label="Thoughts, feelings, and behaviors influence one another in a cycle">
      <svg className="cbt-loop-arrows" viewBox="0 0 360 330" fill="none" aria-hidden="true">
        <defs>
          <marker id="cbt-arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0 0 L12 6 L0 12 Z" fill="currentColor" />
          </marker>
        </defs>
        <path d="M250 20.8 A172 172 0 0 1 351.1 196.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#cbt-arrow)" />
        <path d="M281.1 317.1 A172 172 0 0 1 78.9 317.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#cbt-arrow)" />
        <path d="M8.9 196.1 A172 172 0 0 1 110 20.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#cbt-arrow)" />
      </svg>
      <div className="loop-node is-thoughts"><div className="loop-circle"><BrainIcon/></div><span>Thoughts</span></div>
      <div className="loop-node is-feelings"><div className="loop-circle"><HeartIcon/></div><span>Feelings</span></div>
      <div className="loop-node is-behaviors"><div className="loop-circle"><PersonIcon/></div><span>Behaviors</span></div>
    </div>
  )
}
