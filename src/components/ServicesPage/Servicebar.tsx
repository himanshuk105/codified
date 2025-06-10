export const Servicebar = () => {
  const data = [
    'Product Development',
    'App Development',
    'Software Development',
    'Digital Marketing',
  ]

  return (
    <ul className="hidden lg:flex flex-row border border-[#222222] items-center justify-between bg-black px-7 h-22 z-50 rounded-2xl lg:sticky top-0 ">
      {data.map((d, i) => {
        return (
          <li className="box-border w-15 text-[14px] text-center" key={i}>
            {d}
          </li>
        )
      })}
    </ul>
  )
}
