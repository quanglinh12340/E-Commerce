import blog1 from "@/assets/banner/blog1.png";
import blog2 from "@/assets/banner/blog2.png";
import blog3 from "@/assets/banner/blog3.jpg";
import blog4 from "@/assets/banner/blog4.png";
import blog5 from "@/assets/banner/blog5.jpg";
import "@/assets/css/Blog.css";
import Feature from "@/components/Feature";
import NewsLetter from "@/components/NewsLetter";
const Blog = () => {
  return (
    <>
      <div className="blog-header">
        <h2>#Readmore</h2>
        <p>Read all case studies about our products!</p>
      </div>
      <div id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog2} />
          </div>
          <div className="blog-details">
            <h4>The Watch</h4>
            <p>
              Watches are not only a tool to tell time but also a fashion
              accessory that helps express the wearer's personality and
              aesthetics...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog3} />
          </div>
          <div className="blog-details">
            <h4>The Watch</h4>
            <p>
              If you are looking for a new watch to refresh your style, please
              refer to the top 5 best-selling watch models at...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/09</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog4} />
          </div>
          <div className="blog-details">
            <h4>The Watch</h4>
            <p>
              If you are looking for a new watch to refresh your style, please
              refer to the top 5 best-selling watch models at...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>15/02</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog1} />
          </div>
          <div className="blog-details">
            <h4>Online shopping - Trend of the digital age</h4>
            <p>
              Online shopping is becoming an indispensable part of modern life.
              With the strong development of technology, ordering products from
              clothes, household appliances to food...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>23/10</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog5} />
          </div>
          <div className="blog-details">
            <h4>Benefits of online shopping</h4>
            <p>
              Online shopping brings many benefits, such as saving time, money
              and effort. Instead of having to travel to the store, you just
              need to...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </div>
      <Feature />
      <NewsLetter />
    </>
  );
};

export default Blog;
