const Main = () => {
    return (
        <main>
            <section class="section-hero hero-homepage" data-section-theme="dark">
                <div class="container">
                    <div class="section-body">
                        <section class="section-inner">
                        <h2 class="section-title">We help you build your brand</h2>
                        <a href="#" class="button">Get Started</a>
                        </section>
                    </div>
                </div>
            </section>
            <section id="services" class="section section-services">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Services</h2>
                        <p class="section-tagline">We work with you</p>
                    </header>
                    <div class="section-body">
                        <ul class="row">
                            <li class="col-1-3">
                                <div class="card-services">
                                    <h3 class="card-title"><a href="#">Design & Concept</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                    <h3 class="card-title"><a href="#">Digital Strategy</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                    <h3 class="card-title"><a href="#">Content Strategy</a></h3>
                                </div>
                            </li>
                        </ul>
                        <ul class="row">
                            <li class="col-1-3">
                                <div class="card-services">
                                    <h3 class="card-title"><a href="#">UX Design</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                    <h3 class="card-title"><a href="#">Web Development</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                    <h3 class="card-title"><a href="#">Social Media</a></h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="works" class="section section-works" data-section-theme="dark">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Works</h2>
                        <p class="section-tagline">Take a look at our portfolio</p>
                    </header>
                    <div class="section-body">
                        <ul class="row">
                            <li class="col-1-3">
                                <article class="card-work">
                                    <div class="card-outer">
                                        <div class="card-image">
                                            <img src="images/pic-work-01.jpg" alt="" />
                                        </div>
                                        <div class="card-inner">
                                            <h3 class="card-title"><a href="#">Interior Design</a></h3>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-work">
                                    <div class="card-outer">
                                        <div class="card-image">
                                            <img src="images/pic-work-02.jpg" alt="" />
                                        </div>
                                        <div class="card-inner">
                                            <h3 class="card-title"><a href="#">Web Development</a></h3>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        <li class="col-1-3">
                            <article class="card-work">
                            <div class="card-outer">
                                <div class="card-image">
                                <img src="images/pic-work-03.jpg" alt="">
                                </div>
                                <div class="card-inner">
                                <h3 class="card-title"><a href="#">Personal Development</a></h3>
                                </div>
                            </div>
                            </article>
                        </li>
                        </ul>
                    </div>
                </div>
            </section>
      <!– About Us section –>
      <section id="about" class="section section-about-us">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">About Us</h2>
            <p class="section-tagline">Everything about us</p>
          </header>
          <div class="section-body">
            <div class="row">
              <div class="col-1-2">
                <img
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  srcset="
                  images/pic-about-01_bvd1gs_c_scale,w_380.jpg 380w,
                  images/pic-about-01_bvd1gs_c_scale,w_872.jpg 872w,
                  images/pic-about-01_bvd1gs_c_scale,w_1200.jpg 1200w"
                  src="images/pic-about-01_bvd1gs_c_scale,w_1200.jpg"
                  alt="">
              </div>
              <div class="col-1-2">
                <h3>Who are we</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                <h3>Our culture</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                <h3>How we work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
              </div>
            </div>
          </div>
          <div class="section-footer">
            <a href="#" class="button">Learn more about us</a>
          </div>
        </div>
      </section>
      <!– Latest news section –>
      <section id="latest_news" class="section section-latest-news">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Latest News</h2>
          </header>
          <div class="section-body">
            <ul class="row">
              <li class="col-1-3">
                <article class="card-blog">
                  <div>
                    <img
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      srcset="
                      images/pic-article-01_cdhvgx_c_scale,w_380.jpg 380w,
                      images/pic-article-01_cdhvgx_c_scale,w_1015.jpg 1015w,
                      images/pic-article-01_cdhvgx_c_scale,w_1200.jpg 1200w"
                      src="images/pic-article-01_cdhvgx_c_scale,w_1200.jpg"
                      alt="">
                  </div>
                  <p class="card-category">Career</p>
                  <h3><a href="#">Hoc loco tenere se Triarius non potuit.</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
                  <small>By Kelly D.</small>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-blog">
                  <div>
                    <img
                      sizes="(max-width: 1066px) 100vw, 1066px"
                      srcset="
                      images/pic-article-02_kxx9rz_c_scale,w_380.jpg 380w,
                      images/pic-article-02_kxx9rz_c_scale,w_772.jpg 772w,
                      images/pic-article-02_kxx9rz_c_scale,w_1066.jpg 1066w"
                      src="images/pic-article-02_kxx9rz_c_scale,w_1066.jpg"
                      alt="">
                  </div>
                  <p class="card-category">Digital Life</p>
                  <h3><a href="#">Ut alios omittam, hunc appello, quem ille unum secutus est.</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>
                  <small>By William A.</small>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-blog">
                  <div>
                    <img
                      sizes="(max-width: 1066px) 100vw, 1066px"
                      srcset="
                      images/pic-article-03_idjbra_c_scale,w_380.jpg 380w,
                      images/pic-article-03_idjbra_c_scale,w_839.jpg 839w,
                      images/pic-article-03_idjbra_c_scale,w_1066.jpg 1066w"
                      src="images/pic-article-03_idjbra_c_scale,w_1066.jpg"
                      alt="">
                  </div>
                  <p class="card-category">Social</p>
                  <h3><a href="#">Bestiarum vero nullum iudicium puto.</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.</p>
                  <small>By Frances J.</small>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!– Testimonials section –>
      <section id="testimonial" class="section section-testimonial">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Testimonials</h2>
            <p class="section-tagline">We are more than a digital company</p>
          </header>
          <div class="section-body">
            <ul class="row">
              <li class="col-1-3">
                <article class="card-testimonial">
                  <img src="images/pic-person-01.jpg" alt="Yuri Y. avatar" width="100" height="100" class="card-avatar">
                  <blockquote class="card-quote">
                    <p>I am completely blown away. Thanks to Techium, we’ve just launched our 5th website!
                      <cite>Yuri Y.</cite>
                    </p>
                  </blockquote>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-testimonial">
                  <img src="images/pic-person-02.jpg" alt="Dorrie S. avatar" width="100" height="100" class="card-avatar">
                  <blockquote class="card-quote">
                    <p>Thank you so much for your help. Techium company is awesome!
                      <cite>Dorrie S.</cite>
                    </p>
                  </blockquote>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-testimonial">
                  <img src="images/pic-person-03.jpg" alt="Sven H. avatar" width="100" height="100" class="card-avatar">
                  <blockquote class="card-quote">
                    <p>I love your system. Definitely worth the investment. I’d be lost without Techium company.
                      <cite>Sven H.</cite>
                    </p>
                  </blockquote>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!– Contact section –>
      <section id="contact" class="section section-contact">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Contact</h2>
            <p class="section-tagline">We’d love to hear from you!</p>
          </header>
          <div class="section-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
          </div>
          <div class="section-footer">
            <a href="#" class="button">Get in touch</a>
          </div>
        </div>
      </section>
    </main>
    )
}

export default Main