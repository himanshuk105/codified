import { Blogbar } from '@/components/insights/blogs/Blogbar'
import { Latestblog } from '@/components/insights/blogs/Latestblog'
import { PopularBlog } from '@/components/insights/blogs/Popularblog'
import { Singleblogheader } from '@/components/insights/blogs/Singleblogheader'
import { SingleblogText } from '@/components/insights/blogs/SingleblogText'

const Singleblog = async () => {
  return (
    <section className="relative ">
      <Singleblogheader />
      <SingleblogText />
    </section>
  )
}

export default Singleblog
