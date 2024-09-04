import Latestblogs from "@/components/LatestBlogs/Latestblogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs",{
    next:{
      revalidate:30
    }
  });
  const blogs = await res.json();
  console.log(blogs);

  return (
    <>
      <Latestblogs blogs={blogs} />
    </>
  );
};

export default HomePage;
