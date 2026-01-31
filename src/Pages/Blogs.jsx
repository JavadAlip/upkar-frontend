import BlogMain from '../Components/Blogs/BlogMain';
import PopularArticles from '../Components/Blogs/PopularArticles';
import ReadMore from '../Components/Blogs/ReadMore';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Blogs = () => {
  return (
    <>
      <CmpltNavbar />
      <BlogMain />
      <PopularArticles />
      <ReadMore />
    </>
  );
};

export default Blogs;
