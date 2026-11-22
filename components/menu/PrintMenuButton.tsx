'use client'

export default function PrintMenuButton() {
  return <button type="button" onClick={() => window.print()} className="btn-gold">Print Menu</button>
}
