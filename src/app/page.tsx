import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingNav } from "./components/ui/floating-navbar";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { HeroParallax } from "./components/ui/hero-parallax";
import { BackgroundGradient } from "../app/components/ui/background-gradient";
import {
    CardBody,
    CardContainer,
    CardItem,
} from "../app/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { ParallaxScrollSecond } from "./components/ui/parallax-scroll-2";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { DirectionAwareHover } from "./components/ui/direction-aware-hover";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "./components/ui/text-reveal-card";
export default function Home() {
    const navItems = [
        {
            name: "Home",
            link: "/profile",
        },
        {
            name: "About",
            link: "/about",
        },
    ];

    const words = [
        {
            text: " The Simple ",
        },
        {
            text: " Website Build",
        },
        {
            text: "by",
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const products = [
        {
            title: "Moonbeam",
            link: "https://gomoonbeam.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
        },
        {
            title: "Cursor",
            link: "https://cursor.so",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/cursor.png",
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
    ];

    const images = [
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    ];

    const imageUrl =
        "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <main className="flex min-h-[200vh] w-full overflow-hidden flex-col items-center justify-between p-20 ">
            {/* <FloatingNav navItems={navItems} /> */}
            {/* <HeroParallax products={products} /> */}
            {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                    src={`https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The Air Jordan 4 Retro Reimagined Bred will release on
                    Saturday, February 17, 2024. Your best opportunity to get
                    these right now is by entering raffles and waiting for the
                    official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient> */}
            {/* <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Make things float in air
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Hover over this card to unleash the power of CSS
                        perspective
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover  group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Buy now
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer> */}
            {/* <ParallaxScrollSecond images={images} /> */}
            {/* <TypewriterEffectSmooth words={words} /> */}
            {/* <div className="m-40 flex justify-center text-center">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                    <span>Checkout now</span>
                </HoverBorderGradient>
            </div> */}
            {/* <div className="h-[40rem] relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl}>
                    <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
            </div> */}
            <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
                <TextRevealCard
                    text="You win euro cup"
                    revealText="I win copa america"
                >
                    <TextRevealCardTitle>
                        A simple text reveal card
                    </TextRevealCardTitle>
                    <TextRevealCardDescription>
                        This is a text reveal card. Hover over the card to
                        reveal the hidden text.
                    </TextRevealCardDescription>
                </TextRevealCard>
            </div>
        </main>
    );
}
