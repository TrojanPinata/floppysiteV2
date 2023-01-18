import React, { Component } from "react";
import "./App.css";

class Hardware extends Component {
   render() {
      return (
         <div className="proj">
            <h3>Why Floppy?</h3>
            <p>Why floppy, huh? Why choose an antiquated and completely unreliable storage medium for a website? What brought me to actively seek out such an unfeasible idea? Well. I'm not really sure why to be completely honest. It's kind of a cute and quirky way of showing some technical skill while hiding my inability to do any even remotely decent web design. I thought this up during quarantine and I thought the only way to make it even remotely feasible would be a portfolio website that has low traffic and lower storage requirements. Some of the things I have done previously still live on my GitHub, which I don't plan on merging because <i>why would I?</i></p>
            <p>I guess the best place to start is the hardware, huh. This project runs on Raspberry Pi OS installed on the original Raspberry Pi Model B, with all 512MB of RAM and a SD card that barely has enough room for the OS. I'm using a Sabrent USB floppy drive with a Verbatim High Density 1.44MB disk. The Pi uses a standard 5V 2.1A power supply while the floppy drive pulls 500mA, the limit for the original Pi’s periphery. This does cause a problem, as the floppy drive <i>is a liar</i> and actually draws way more power. The solution to this is to buy one of those powered USB hubs and plug it in. Which I'm going to do eventually, but for now everything has to run locally.</p>
            <p>The entirety of this website runs on the foundation that images can be stored on a Imgur page and accessed when they need to, and the bulk of the html can be kept on the floppy. I really want this site to have enough sustainability that if the image links were to stop working, the site would remain readable. Currently (as of 18-03-2022), my Pi hasn't been able to power the floppy drive due to its 500mA peripheral limit so I'm just going to keep to the 1.44MB limit and leave the site on SD. In the future, I plan to get some extremely old hardware that I can run this project on with a natively installed floppy drive, or a Pi 3 with the lowest amount of ram I can get. (<i>but like have you seen the pi prices right now!?</i>)</p>
            <img src="https://i.imgur.com/C6YAijC.jpg" alt="the setup"/>
            <p>Update 23-04-2022: I swapped the original Pi for a Pi 3B which has been just a joy to work with. The original Pi had a ARMv6 processor which wasn't supported by SSL (more like my certificate service and a few other crucial components) and my load times were, as my friend would say, <i>horrendous</i>. This switch was mostly due to wanting that nice https:// lock next to the address and the speed difference from 100 mbps -&gt; 1 gbps. This swap doubled by RAM (and longevity before having to switch servers again) which was also nice. This Pi used to be used as a dedicated video player, somehow using all 1 GB of memory to run 1080p video from local storage. If it can handle that then I think it definitely can handle a simple website. With this change, everything will be stored back on the floppy disk. I will leave the above content as a sort of tribute to the pain I had to suffer through with the original Pi, as I think it is a good lesson I learned in why you shouldn't use 10 year old hardware for things that can easily solved/improved by more modern technology.</p>
            <p>Update 04-01-2023: I swapped the 3B for a dedicated Ubuntu VM on my server. I did this to consolidate my devices and I have more than enough unutilized power on the machine to host it. I also switched the backend to nginx, as that is something I have wanted to do for a long time. Apache is very plug and play, and I love it for that, but the future of this site is not static and needs the features. The name floppy site has become a skeuomorph, in that it is not hosted on a floppy disk and has finally moved away from the architecture it originally ran on. I feel like this site has really grown up since it was created.</p>
            <p> This was just a late night update, thank you for reading. And as always,</p>
            <p>until next time.</p>
         </div>
      );
   }
}

export default Hardware;