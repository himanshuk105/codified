import Link from 'next/link'

export const Header = async () => {
  const nav = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/services',
      text: 'Services',
    },
    {
      href: '/industries',
      text: 'Industries',
    },
    {
      href: '/insights',
      text: 'Insights',
    },
    {
      href: '/about-us',
      text: 'About',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ]

  return (
    <header className="h-[80px] relative bg-black">
      <nav className="h-[80px] p-2 box-border flex justify-between items-center fixed top-0 right-0 left-0 z-20 backdrop-blur-[10px]">
        <div className="size-10 border-2 border-white grow-none">
          <img src={'/logo.png'} alt="codified web solution logo" />
        </div>
        <ul className="text-white flex justify-between gap-2 items-center grow-[0.2]">
          {nav.map((d, i) => {
            return (
              <li key={i}>
                <Link href={d.href}>{d.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className="grow-none h-[70%] text-black  border-white">
          <button className="bg-white font-bold h-full p-3 text-center flex items-center justify-center rounded">
            Free Consultation
          </button>
        </div>
      </nav>
    </header>
  )
}
