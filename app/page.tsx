"use client";
import Overlay from "@/components/Overlay";
import { Aclonica } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // color
  // color-dodge
  // hard-light

  const [show, setShw] = useState(false as false | "sex" | "drugs" | "alcohol" | "3" | "credits");

  const [shown, setShown] = useState({
    sex: false,
    drugs: false,
    alcohol: false
  });

  const allShown = shown.sex && shown.drugs && shown.alcohol;

  const setShow = (s: false | "sex" | "drugs" | "alcohol" | "credits") => {
    if (s === false || s === "credits") {
      setShw(s);
      return;
    }
    if (allShown) {
      setShw("3");
      return;
    }
    setShw(s);
    setShown(x => ({ sex: x.sex || s === "sex", drugs: x.drugs || s === "drugs", alcohol: x.alcohol || s === "alcohol" }));
  }


  const [sexHover, setSexHover] = useState(false);
  const [drugsHover, setDrugsHover] = useState(false);
  const [alcoholHover, setAlcoholHover] = useState(false);

  const allHover = allShown && (sexHover || drugsHover || alcoholHover);

  return (
    <>
      {show && <div className="w-full h-screen absolute top-0 flex items-center z-20" onClick={() => setShow(false)}>
        <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-screen" />
        <div className="h-full mx-auto w-1/3 min-w-90 z-30 bg-black/50">

          {show === "sex" && <div className="text-2xl text-red-500/40 bg-black/30 px-10 py-5 overflow-scroll h-screen hide-scrollbar">
            <Overlay>sex</Overlay><br /><br />
            <Overlay>i crave You</Overlay><br />
            <Overlay>lip on lip</Overlay><br />
            <Overlay>skin on skin</Overlay><br />
            <Overlay>human on human</Overlay><br />
            <br /><br /><br />
            <Overlay>with You, life transcends</Overlay><br />
            <Overlay>beyond love</Overlay><br />
            <Overlay>beyond words</Overlay><br />
            <Overlay>beyond intimacy</Overlay><br />
            <br /><br /><br />
            <Overlay>You fill</Overlay><br />
            <Overlay>a void my heart</Overlay><br />
            <Overlay>cannot fill</Overlay><br />
            <br /><br /><br />
            <Overlay>You make me</Overlay><br />
            <Overlay>feel</Overlay><br />
            <Overlay>like</Overlay><br />
            <Overlay>a girl</Overlay><br />
            <br /><br /><br />
            <Overlay>i loathe You</Overlay><br />
            <Overlay>Your actions</Overlay><br />
            <Overlay>Your demands</Overlay><br />
            <Overlay>Your physicality</Overlay><br />
            <br /><br /><br />
            <Overlay>but i need You</Overlay><br />
            <Overlay>Your love</Overlay><br />
            <Overlay>Your validation</Overlay><br />
            <Overlay>Your connection</Overlay><br />
          </div>}

          {show === "drugs" && <div className="text-2xl text-green-500/40 bg-black/30 px-10 py-5 overflow-scroll h-screen hide-scrollbar">
            <Overlay>drugs</Overlay><br /><br />
            <Overlay>i remember</Overlay><br />
            <Overlay>memories</Overlay><br />
            <Overlay>without You in them</Overlay><br />
            <br /><br /><br />
            <Overlay>memories</Overlay><br />
            <Overlay>that burned</Overlay><br />
            <Overlay>brighter than a lighter</Overlay><br />
            <br /><br /><br />
            <Overlay>i remember</Overlay><br />
            <Overlay>meeting You</Overlay><br />
            <br /><br /><br />
            <Overlay>We'd</Overlay><br />
            <Overlay>kill time</Overlay><br />
            <Overlay>together</Overlay><br />
            <br /><br /><br />
            <Overlay>We'd</Overlay><br />
            <Overlay>make memories</Overlay><br />
            <Overlay>together</Overlay><br />
            <br /><br /><br />
            <Overlay>i remember</Overlay><br />
            <Overlay>memories</Overlay><br />
            <Overlay>fading</Overlay><br />
            <br /><br /><br />
            <Overlay>memories</Overlay><br />
            <Overlay>that i lost</Overlay><br />
            <Overlay>faster than my independence</Overlay><br />

          </div>}

          {show === "alcohol" && <div className="text-2xl text-blue-500/40 bg-black/30 px-10 py-5 overflow-scroll h-screen hide-scrollbar">
            <Overlay>alcohol</Overlay><br /><br />

            <Overlay>i grew up</Overlay><br />
            <Overlay>with You</Overlay><br />
            <br /><br /><br />
            <Overlay>i learned</Overlay><br />
            <Overlay>to love You</Overlay><br />
            <br /><br /><br />
            <Overlay>i've chosen</Overlay><br />
            <br /><br /><br />
            <Overlay>You</Overlay><br />
            <Overlay>over</Overlay><br />
            <Overlay>my friends</Overlay><br />
            <br /><br /><br />
            <Overlay>i've lost</Overlay><br />
            <Overlay>balance</Overlay><br />
            <br /><br /><br />
            <Overlay>i've chosen</Overlay><br />
            <br /><br /><br />
            <Overlay>You</Overlay><br />
            <Overlay>over</Overlay><br />
            <Overlay>myself</Overlay><br />
            <br /><br /><br />
            <Overlay>i've lost</Overlay><br />
            <Overlay>who i am</Overlay><br />
          </div>}

          {show === "credits" && <div className="text-2xl text-white/40 px-10 py-5 overflow-scroll text-wrap h-screen hide-scrollbar">
            <Overlay>Poems, background, website by Autumn Rockwell</Overlay><br /><br /><br />
            <Overlay>Background FX by Noah Lin</Overlay><br />
            <br />
            <br />
            <Overlay>Background attributions</Overlay><br /><br /><br />
            <Overlay>https://uk.pinterest.com/pin/810296157981730057/</Overlay><br /><br /><br /><br />
            <Overlay>https://wallpaperaccess.com/love-black-and-white</Overlay><br /><br /><br /><br />
            <Overlay>https://wallpaperaccess.com/love-black-and-white</Overlay><br /><br /><br /><br />
            <Overlay>https://storyboardwedding.com/moody-black-and-white-boudoir/black_and_white_boudoir_kel_ward_photography_10-rv/</Overlay><br /><br /><br /><br />
            <Overlay>https://www.pinterest.com/pin/416160821818154233/</Overlay><br /><br /><br /><br />
            <Overlay>https://pixabay.com/photos/black-and-white-petals-flower-wet-2561974/</Overlay><br /><br /><br /><br />
            <Overlay>https://www.etsy.com/market/black_and_white_kink</Overlay><br /><br /><br /><br />
            <Overlay>https://wallpapercave.com/black-marijuana-hd-wallpaper</Overlay><br /><br /><br /><br />
            <Overlay>https://www.teahub.io/viewwp/xTxom_black-and-white-smoking-weed/</Overlay><br /><br /><br /><br />
            <Overlay>https://lit438dld.blogspot.com/2018/09/black-and-white-weed-wallpaper.html</Overlay><br /><br /><br /><br />
            <Overlay>https://rare-gallery.com/xfsearch/alt/etherial/</Overlay><br /><br /><br /><br />
            <Overlay>https://wallpapers.com/smoking</Overlay><br /><br /><br /><br />
            <Overlay>https://wallpapercave.com/weed-minimal-wallpapers</Overlay><br /><br /><br /><br />
            <Overlay>https://wallpapercave.com/black-and-white-smoking-girl-wallpapers</Overlay><br /><br /><br /><br />
            <Overlay>https://www.pexels.com/photo/grayscale-photography-of-margarita-glass-on-table-4295/</Overlay><br /><br /><br /><br />
            <Overlay>https://ar.inspiredpencil.com/pictures-2023/alcohol-photography-black-and-white</Overlay><br /><br /><br /><br />
            <Overlay>https://ar.inspiredpencil.com/pictures-2023/alcohol-black-and-white</Overlay><br /><br /><br /><br />
            <Overlay>https://ar.inspiredpencil.com/pictures-2023/alcohol-wallpaper-white</Overlay><br /><br /><br /><br />
            <Overlay>https://www.istockphoto.com/illustrations/black-and-white-alcohol</Overlay><br /><br /><br /><br />
            <Overlay>https://ar.inspiredpencil.com/pictures-2023/beer-photography-black-and-white</Overlay><br /><br /><br /><br />


          </div>
          }

          {show === "3" && <div className="text-2xl bg-black/30 px-10 py-5 overflow-scroll h-screen hide-scrollbar">
            <div className="flex gap-2 w-full items-start">
              <Overlay fillWidth className="text-white/40 text-nowrap " divClass="w-fit">(you are like)</Overlay> <Overlay className="text-red-500/40" divClass="w-fit">sex</Overlay><br /><br />
            </div>
            <Overlay className="text-red-500/40">i crave You</Overlay><br />
            <Overlay className="text-red-500/40">lip on lip</Overlay><br />
            <Overlay className="text-red-500/40">skin on skin</Overlay><br />
            <Overlay className="text-red-500/40">human on human</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">I craved the way</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">you called me</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">yours</Overlay><br />
            <Overlay className="text-red-500/40">with You, life transcends</Overlay><br />
            <Overlay className="text-red-500/40">beyond love</Overlay><br />
            <Overlay className="text-red-500/40">beyond words</Overlay><br />
            <Overlay className="text-red-500/40">beyond intimacy</Overlay><br />

            <Overlay className="text-white/40 text-right right-0"> we exchanged tongues</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">no one else could</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">understand</Overlay><br />


            <Overlay className="text-red-500/40">You fill</Overlay><br />
            <Overlay className="text-red-500/40">a void my heart</Overlay><br />
            <Overlay className="text-red-500/40">cannot fill</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">but I'm sure</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">you knew</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">that</Overlay><br />

            <Overlay className="text-red-500/40">You make me</Overlay><br />
            <Overlay className="text-red-500/40">feel</Overlay><br />
            <Overlay className="text-red-500/40">like</Overlay><br />
            <Overlay className="text-red-500/40">a girl</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">My femininity</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">was defined</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">by you</Overlay><br />

            <Overlay className="text-red-500/40">i loathe You</Overlay><br />
            <Overlay className="text-red-500/40">Your actions</Overlay><br />
            <Overlay className="text-red-500/40">Your demands</Overlay><br />
            <Overlay className="text-red-500/40">Your physicality</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I gave you</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">what you</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">wanted</Overlay><br />

            <Overlay className="text-red-500/40">but i need You</Overlay><br />
            <Overlay className="text-red-500/40">Your love</Overlay><br />
            <Overlay className="text-red-500/40">Your validation</Overlay><br />
            <Overlay className="text-red-500/40">Your connection</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I needed to be</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">desirable</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">to you</Overlay><br /><br />




            <div className="flex gap-2 w-full items-start">
              <Overlay fillWidth className="text-white/40 text-nowrap " divClass="w-fit">(you are like)</Overlay> <Overlay className="text-green-500/40" divClass="w-fit">drugs</Overlay><br /><br />
            </div>

            <Overlay className="text-green-500/40">i remember</Overlay><br />
            <Overlay className="text-green-500/40">memories</Overlay><br />
            <Overlay className="text-green-500/40">without You in them</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">before</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">we'd</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">met</Overlay><br />

            <Overlay className="text-green-500/40">memories</Overlay><br />
            <Overlay className="text-green-500/40">that burned</Overlay><br />
            <Overlay className="text-green-500/40">brighter than a lighter</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">before</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">I relied</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">on you</Overlay><br />

            <Overlay className="text-green-500/40">i remember</Overlay><br />
            <Overlay className="text-green-500/40">meeting You</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">you made</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">Me feel</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">small</Overlay><br />

            <Overlay className="text-green-500/40">We'd</Overlay><br />
            <Overlay className="text-green-500/40">kill time</Overlay><br />
            <Overlay className="text-green-500/40">together</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">time was</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">all we</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">had</Overlay><br />

            <Overlay className="text-green-500/40">We'd</Overlay><br />
            <Overlay className="text-green-500/40">make memories</Overlay><br />
            <Overlay className="text-green-500/40">together</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I couldn't make</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">memories with</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">anyone else</Overlay><br />

            <Overlay className="text-green-500/40">i remember</Overlay><br />
            <Overlay className="text-green-500/40">memories</Overlay><br />
            <Overlay className="text-green-500/40">fading</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">the damage</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">started to</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">show</Overlay><br />

            <Overlay className="text-green-500/40">memories</Overlay><br />
            <Overlay className="text-green-500/40">that i lost</Overlay><br />
            <Overlay className="text-green-500/40">faster than my independence</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">you took away</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">who I</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">was</Overlay><br /><br />





            <div className="flex gap-2 w-full items-start">
              <Overlay fillWidth className="text-white/40 text-nowrap " divClass="w-fit">(you are like)</Overlay> <Overlay className="text-blue-500/40" divClass="w-fit">alcohol</Overlay><br /><br />
            </div>

            <Overlay className="text-blue-500/40">i grew up</Overlay><br />
            <Overlay className="text-blue-500/40">with You</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">can</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">grow up again</Overlay><br />

            <Overlay className="text-blue-500/40">i learned</Overlay><br />
            <Overlay className="text-blue-500/40">to love You</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">can learn</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">to love another</Overlay><br />

            <Overlay className="text-blue-500/40">i've chosen</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">can choose</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">on my own now</Overlay><br />

            <Overlay className="text-blue-500/40">You</Overlay><br />
            <Overlay className="text-blue-500/40">over</Overlay><br />
            <Overlay className="text-blue-500/40">my friends</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">who</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">I am</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">over you</Overlay><br />

            <Overlay className="text-blue-500/40">i've lost</Overlay><br />
            <Overlay className="text-blue-500/40">balance</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">will find</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">balance again</Overlay><br />

            <Overlay className="text-blue-500/40">i've chosen</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I've</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">chosen</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">a life of joy</Overlay><br />

            <Overlay className="text-blue-500/40">You</Overlay><br />
            <Overlay className="text-blue-500/40">over</Overlay><br />
            <Overlay className="text-blue-500/40">myself</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">who</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">I am</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">over you</Overlay><br />

            <Overlay className="text-blue-500/40">i've lost</Overlay><br />
            <Overlay className="text-blue-500/40">who i am</Overlay><br />

            <Overlay className="text-white/40 text-right right-0">I</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">will find</Overlay><br />
            <Overlay className="text-white/40 text-right right-0">Me again</Overlay><br />
            <br />
            <Overlay className="text-white/40 text-right right-0">Sober.</Overlay><br />

          </div>}
        </div>
      </div>}
      <div className={"absolute w-full h-1/9 z-10 bg-red-500 top-2/7 mix-blend-color-dodge cursor-pointer opacity-0 delay-25 transition-all " + (allHover || sexHover ? "opacity-50!" : "")}
        onClick={() => setShow("sex")} onMouseEnter={() => setSexHover(true)} onMouseLeave={(() => setSexHover(false))} />

      <div className={"absolute w-full h-1/9 z-10 bg-green-500 top-5/12 mix-blend-hard-light cursor-pointer opacity-0  delay-25 transition-all " + (allHover || drugsHover ? "opacity-50!" : "")}
        onClick={() => setShow("drugs")} onMouseEnter={() => setDrugsHover(true)} onMouseLeave={(() => setDrugsHover(false))} />

      <div className={"absolute w-full h-1/9 z-10 bg-blue-500 top-7/13 mix-blend-hard-light cursor-pointer opacity-0  delay-25 transition-all " + (allHover || alcoholHover ? "opacity-50!" : "")}
        onMouseEnter={() => setAlcoholHover(true)} onMouseLeave={(() => setAlcoholHover(false))} onClick={() => setShow("alcohol")} />
      <div className="h-screen w-full bg-black flex items-center">
        <div className="mx-auto mockup h-full w-full">

        </div>
      </div>

      {!show && <div className="absolute bottom-0 right-0 bg-black/40 px-4 py-2 cursor-pointer" onClick={() => setShow("credits")}>
        <Overlay className="text-white/30" fillWidth>Credits</Overlay>
      </div>}
    </>
  );
}
