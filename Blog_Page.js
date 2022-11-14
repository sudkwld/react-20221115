import Footer from './Footer.js';
import './Blog_css.css';

import { BiSearch, BiCalendarAlt } from 'react-icons/bi';
import {MdOutlinePersonOutline} from 'react-icons/md';
import {HiOutlineBookmark} from 'react-icons/hi';

function Blog_Page() {
  return (
    <>
      <div className="sub-menu-wrap">
        <div className='sub-menu-bg' style={{ backgroundImage: 'url(img/page-header-bg.jpg)' }}>
          <h3>Blog Classic</h3>
          <span>Blog</span>
        </div>
        <div className='container'>
          <ul className='blog-index'>
            <li>Home</li>
            <li>&gt;</li>
            <li>Blog</li>
            <li>&gt;</li>
            <li>Classic</li>
          </ul>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='article-container'>
                <div className='article-img'>
                  <img src='img/Blog1.jpg' alt='blog' />
                </div>
                <ul className='blog-user-index'>
                  <li>by <span>John Doe</span></li>
                  <li>|</li>
                  <li><span>August 3, 2021</span></li>
                  <li>|</li>
                  <li><span>2 Comments</span></li>
                </ul>
                <h3>HANDMADE PIECES THAT TOOK TIME TO MAKE</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat.</p>
                <blogckquote>“Lorem ipsum dolor sit amet, consetetur sadi pscing elitr
                  , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.”
                </blogckquote>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                  duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                  sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                  eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                  accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr.</p>
                <div className='article-box'>
                  <div className='more-furniture'>
                    <img src='img/Blog2.jpg' alt='blog' />
                    <p>Est velit etlaborio sam or est inventore quo numquam Labore
                      voluptas nihil molestiae sint delectus sint sequi voluptatem.
                    </p>
                  </div>
                  <div className='more-furniture'>
                    <img src='img/Blog3.jpg' alt='blog' />
                    <p>Est velit etlaborio sam or est inventore quo numquam Labore
                      voluptas nihil molestiae sint delectus sint sequi voluptatem.
                    </p>
                  </div>
                </div>
                <div className='article-text'>
                  <h3>Labore volup tas nihil molestiae sint delectus</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    lorem dolor null accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, no sea takimata sanctus
                    est Lorem ipsum dolor sit amet. sed diam voluptua.
                    tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum.</p>
                </div>
                <div className='blog-article'>
                  <div className='article-img'>
                    <img src='img/blog4.jpg' alt='blog-img' />
                  </div>
                  <ul className='blog-name-tag'>
                    <li><MdOutlinePersonOutline className='tag-icon' />admin</li>
                    <li>-</li>
                    <li><BiCalendarAlt className='tag-icon'/>August 3, 2021</li>
                    <li>-</li>
                    <li><HiOutlineBookmark className='tag-icon'/>Wood</li>
                  </ul>
                  <h3>Going all-in with millennial design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
                    posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
                    at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                    Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
                    nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <button className='read-more'>Read more</button>
                </div>
                <div className='blog-article'>
                  <div className='article-img'>
                    <img src='img/blog5.jpg' alt='blog-img' />
                  </div>
                  <ul className='blog-name-tag'>
                    <li><MdOutlinePersonOutline className='tag-icon'/>admin</li>
                    <li>-</li>
                    <li><BiCalendarAlt className='tag-icon'/>August 3, 2021</li>
                    <li>-</li>
                    <li><HiOutlineBookmark className='tag-icon'/>Handmade</li>
                  </ul>
                  <h3>Going all-in with millennial design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
                    posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
                    at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                    Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
                    nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <button className='read-more'>Read more</button>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='blog-side-box'>
                <input type='search' placeholder='Search...' />
                <span className='blog-mag'><BiSearch className='blog-search-icon'/></span>
              </div>
              <div className='blog-side-box'>
                <table>
                  <tbody>
                    <th>Categories</th>
                    <tr>
                      <td>Lifestyle</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Shopping</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Fashion </td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Travel</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Hobbies</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='blog-side-box'>
                <h3>Popular Posts</h3>
                <ul className='blog-posts'>
                  <li>
                    <figure>
                      <img src='img/side1.jpg' alt='post' />
                    </figure>
                    <div className='post-txt'>
                      <h4>Going all-in with millennial design</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side2.jpg' alt='post' />
                    </figure>
                    <div className='post-txt'>
                      <h4>Exploring new ways of decorating</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side3.jpg' alt='post' />
                    </figure>
                    <div className='post-txt'>
                      <h4>Revslider Kosi Handmade pieces that took time to make</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side4.jpg' alt='post' />
                    </figure>
                    <div className='post-txt'>
                      <h4>Modern home in Milan</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side5.jpg' alt='post' />
                    </figure>
                    <div className='post-txt'>
                      <h4>Colorful office redesign</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='blog-sub-box'>
                <h3>Browse Tags</h3>
                <div className='browse-tags'>fashion</div>
                <div className='browse-tags'>style</div>
                <div className='browse-tags'>fresh</div>
                <div className='browse-tags'>photography</div>
              </div>
              <div className='blog-side-box'>
                <h3>About Blog</h3>
                <p>Vestibulum volutpat, lacus a ultrices sagittis,
                  mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog_Page;