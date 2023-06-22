import Link from "next/link"

type LKNavigationCardProps = {
  href: string,
  icon: string,
  text: string,
  active: boolean
}

function LKNavigationCard({ href, icon, text, active }: LKNavigationCardProps) {
  return (
    <Link href={href} className={`card-nav-link ${active ? ' active' : ''}`}>
      {icon ? <i className={`${icon} me-2`}></i> : ''}
      {text}
    </Link>
  )
}

export default LKNavigationCard;