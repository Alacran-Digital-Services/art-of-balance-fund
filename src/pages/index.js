import * as React from "react"

import "../styles/global.css"
import "../styles/index.css"

import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CommonButton from "../components/common/commonButton"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>Websites</h1>

        <p>After quitting from my consulting job, I decided that I wanted to build websites myself and gain some additional experience building front-end experiences.
          I found a pretty awesome tool that allows me to easily do this, and here you can see some of the websites I've built for clients. This allows me to practice my skill
          while also providing a valuable service to others. Check out my work here, and make sure to send me a message if you're interested in building your own site.
          You can learn more about my company and what we build by checking out our website here.
        </p>

        <div className="contentContainer">
          <div className="gridContainer">
            <div>Device Fix Inc</div>
            <div>Alacrán Digital Services</div>
            <div>Art of Balance Fund</div>
          </div>
          <div className="centering">
            <CommonButton buttonTitle="VIEW ALL" slug="" isGatsbyLink={true}></CommonButton>
          </div>
        </div>


      </div>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>Music</h1>

        <p>I've been playing music since 2005, when I learned how to play the guitar at lessons offered through the church choir.
          After that, some friends and I formed a band by the name of Makeshift and played several shows at different venues throughout Chicago.
        </p>
        <p>After that, I played in the church choir for over ten years, and have recently been creating music under my own name and sound.
          This has been an incredibly introspective journey into the question of what's possible. When we have freedom to create, there's so much available.
          This is my exploration into what's possible in my own life. I hope you enjoy, feel free to listen to all my music here.
        </p>

      </div>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>I built this website from the ground up.</h1>

        <p>Here the different technologies I used to build this site:</p>
      </div>

      <IconCollection></IconCollection>

      <div className="copyContent">
        <p>Here are some of the benefits from building a website this way:</p>
        <ul>
          <li>Unlimited customization and freedom around design.</li>
          <li>Lightweight implementation using simple Javascript.</li>
          <li>Quickly deploy iterative updates.</li>
          <li>It's all open source, and you can check it out here on <a rel="noreferrer" target="_blank" href="https://github.com/jvmontes/basic-blog">Github</a>.</li>
        </ul>

      </div>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>A Final Word</h1>

        <p>Hey, I just wanted to say, I really appreciate that you came and checked out my website. From one human to another, it means a lot. 
          I believe that gratitude is what grounds us in our lives and if we're able to express and accept gratitude, it will immensly increase the quality of our lives.
        </p>

        <p>
          This project has taken me a long time to build, but I'm happy with where it stands. Utilizing the modern tools available to us, I was able to build a modern-looking website 
          to authentically share my story, for a low cost and less effort than you'd think. I have the freedom to add whatever I see fit, and I'm able to really share myself authentically.
          I hope you enjoyed your stay, and I hope you find peace, love, and light for yourself in your life. And I really mean that.
        </p>

        <p>Peace ✌🏼</p>
      </div>
      
    </div>

  </Layout>
)

export default IndexPage
