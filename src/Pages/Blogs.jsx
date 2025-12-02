import BlogMain from '../Components/Blogs/BlogMain';
import PopularArticles from '../Components/Blogs/PopularArticles';
import ReadMore from '../Components/Blogs/ReadMore';
import JoinTeam from '../Components/Career/JoinTeam';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Blogs = () => {
  return (
    <>
      <CmpltNavbar />
      <BlogMain />
      <PopularArticles />
      <ReadMore />
      <JoinTeam />
    </>
  );
};

export default Blogs;
