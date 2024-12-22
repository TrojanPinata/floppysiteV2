import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class Dispolens extends Component {
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Recreating Dispolens for DSLR Cameras</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>Every photo that I have taken for this website has been taken on my <a href="https://en.wikipedia.org/wiki/Nikon_D5600">Nikon D5600</a> with either a 35mm prime or an 18-55mm zoom lens (with the exception of the rose on the front page, that was a <a href="https://en.wikipedia.org/wiki/Nikon_D40">Nikon D40</a> my dad had when I was a kid). I really like cameras. It is one of those <a href="https://en.wikipedia.org/wiki/Mechatronics">mechatronics</a> things that is right up my alley and of course I would become fascinated with them. They are so complicated and precise that I have a hard time working on them. I collect cameras now and I really like photography, though it is very difficult to find the time to actually do it. Thus, I end up spending more time procuring tools rather than actually using them. Regardless, I still love talking about them and discussing photography, even though I am far out of practice. </p>
                  <p>Recently, I was talking to my friend Kobe (the same Kobe that did the photos for the <a href="https://brianchill.us/#/ModelB">Model B</a>) and we were discussing this new lens he has for his <a href="https://en.wikipedia.org/wiki/Sony_%CE%B17_III">Sony a7iii</a>, called a <a href="https://www.etsy.com/listing/1561244644/dispolens-for-sony-e-mount?click_key=ca957c5ae892b7ef810f991d4e7457ba30eac2b4%3A1561244644&click_sum=b4118674&ref=shop_home_active_1&pro=1&frs=1">Dispolens</a>. It is a $50 3D printed lens which uses the tiny lens from a disposable camera to get a lofi, nostalgic effect. I saw some of the photos taken with it and I was smitten. I really wanted one. There was just one problem: They don’t make one which fits my camera.</p>
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffujixweekly.com%2Fwp-content%2Fuploads%2F2024%2F02%2F53549515901_444579f468_h.jpg&f=1&nofb=1&ipt=23d47dad65b0a2f542c07e598b6e6400be32c84bd02bad4150dacbbe7749a4c0&ipo=images" alt="Fujifilm X-E4 with Dispolens" />
                  <p>The Nikon D5600, much like every one of their DSLRs since the 1950s, has used the <a href="https://en.wikipedia.org/wiki/Nikon_F-mount">Nikon F-Mount</a> for all lens and only recently, with the advent of mirrorless cameras, have switched to the <a href="https://en.wikipedia.org/wiki/Nikon_Z-mount">Z-Mount</a>. This is great, as both are side by side and completely incompatible. My friend has a <a href="https://en.wikipedia.org/wiki/Sony_E-mount">Sony E-Mount</a> camera, so his of course has no issues, but I couldn’t figure out why my camera isn’t supported but the Z-Mount is.</p>
                  <p>But here’s the thing: this is a 3D printed lens which uses a optic from a camera I can buy at Walmart. So I did. I went to Walmart, bought a <a href="https://www.walmart.com/ip/Fujifilm-QuickSnap-One-Time-Use-35mm-Camera-with-Flash/542193532?classType=REGULAR&athbdg=L1100&from=/search">Fujifilm disposable camera for $19</a> and ripped the lens out of it. Then I spent three weeks printing lenses with different focal lengths to find the optimal length with clear focus. And I figured out why these aren’t made for my camera.</p>
                  <img src="https://i.imgur.com/G7n4xQG.jpeg" alt="different iterations with different focal distances" />
                  <p>There’s this thing in cameras called the <a href="https://en.wikipedia.org/wiki/Flange_focal_distance">flange focal distance</a>, which the distance from the back of the lens to the sensor. In mirrorless cameras, this length is around 18mm, which it is on the Sonys. On a DSLR, specifically mine with the F-Mount, it is 46.5mm. Now that’s a long way away, but it gets worse. There’s a mirror in between the senor and the lens in order to allow you to use the viewfinder and see what you are shooting. That mirror is in the way of where the back of the lens needs to be to use this DIY lens, and thus can’t be used.</p>
                  <p>But I can cheat. Because I have a D5600, which was made in the last ten years, it has a feature called live mode, also known as just making the camera mirrorless by locking the mirror to the top and using the screen as a viewfinder. Yeah. So, if I just make a lens that can reach the target location and put the camera into this mode, I can get the result. You can see on all of my prototypes that the lens reaches deep into the camera body.</p>
                  <img src="https://i.imgur.com/v37TLCD.jpeg" alt="final lens" />
                  <p>Doing those two things gives the exact effect I wanted. It is genuinely everything I hoped for. The aesthetic is what I was aiming for. I made a total of fifteen prototypes for this, and after I got to my final version, I cleaned it up to reduce the vignette and increase the aperture a bit. This is kind of a weird solution to this problem, but I really enjoyed making prototype after prototype and iterating on ideas rather than calculating like I usually do. I knew vaguely what the target distance would be, but I think it is cooler a album of photos with different focal distances. It really makes me appreciate optics and lens construction. Eventually, once I have a proper lathe and CNC mill, I would like to try and machine my own with off the shelf optics, but that is far in the future. </p>
                  <p>Here are some photos I took of my desk and house after making the lens.</p>
                  <p>The first photo is of a old radio and some hifi equipment. The exposure and brightness needed to be upped a bit as the apeture is so small and without a sunlit room or insane flash photos look too dark. I had to crank the iso and drop the shutter speed more than I am comfortable with for freehand shooting.</p>
                  <img src="https://i.imgur.com/qyGVPTw.jpeg" alt="radio + amen break machine" />
                  <p>I upped the brightness for this one too, but even then I was shooting at 1/15 with 3200 iso - waaay too high for me typically (it does give the effect I wanted though).</p>
                  <img src="https://i.imgur.com/JDYHKUr.jpeg" alt="wall" />
                  <p>Large posters which reflect colors easily make for good lighting and this lens handles the reflections pretty well. Especially considering I probably scratched it during my prototyping.</p>
                  <img src="https://i.imgur.com/MxqAUEp.jpeg" alt="bass head" />
                  <p>Because this lens has no ability to change focus, anything in a somewhat close range is basically unusable. People and things that are less than five feet away are not this len's strong suit.</p>
                  <img src="https://i.imgur.com/pPJ7lva.jpeg" alt="close up of keyboard" />
                  <p>I love taking photos of extremely busy things, and my desk and office are the perfect examples of this. This lens does well not to get overwhelmed with reflections even though I had my pocket light right next to the lens.</p>
                  <img src="https://i.imgur.com/Hg1OAV8.jpeg" alt="final lens" />
                  <p>Until next time.</p>
               </Fade>
            </div>
            {/*11/30/24*/}
            <Footer />
         </div>
      );
   }
}

export default Dispolens;