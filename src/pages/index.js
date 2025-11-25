import React from "react"

const features = [
    {
        title: "Open World",
        description:
            "From the very beginning in the Kingdom, you see a huge world that is worth exploring. Find new villages, help the residents and most importantly — find out what kind of evil has settled in the kingdom.",
    },
    {
        title: "Character Development",
        description: "Your character does not stand still and develops depending on your actions. So changing certain Attributes changes the appearance of your character, and Skills improve as they are used.",
    },
    {
        title: "Replayability",
        description: "Many tasks and conflicts can be solved in different ways, it all depends on your style of play.",
    },
    {
        title: "Craft",
        description:
            "As you progress through the game, you will find recipes for alchemy, food, armor..., but to successfully create an item, you need to repeat everything exactly according to the recipe. The game will reward the most attentive and diligent with High-Quality items.",
    },
    {
        title: "Relationships",
        description:
            "The world of the game is filled with a large number of characters with their own history and character. As the relationship with one of the characters improves, you will be able to learn about their past, and maybe even engage in Love Joys.",
    },
    {
        title: "Unique Races",
        description:
            "As mentioned earlier, the world of the game is filled with a huge number of different races: from gentle and caring Felines to howling Minotauresses. Each of the races has unique Skills and Abilities that you can master if you sufficiently improve your relationship with any of the representatives.",
    },
]

export default function Hello() {
    return (
        <div className="w-full flex flex-col pt-20 pb-20 min-h-screen justify-center items-center gap-8">
            <img src="/img/title.png" alt="Aurora's Fog Game Logo" className="w-full lg:w-8/12" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center"> Aurora's Fog Game Wiki </h1>
                <h5 className="text-center"> Aurora's Fog Wiki: Guide, Walkthrough, Bosses, Secrets, Monster, Skills and more. </h5>
            </div>
            <p className="text-center">
                Aurora's Fog is a 18+ story of adventures of a little man in the wonderful Kingdom of Aurora, shrouded in secrets, riddles, and princesses who are waiting for you to save them. And the most important
                thing... you write this story! So be patient, have some provisions and go, no adventure awaits!
            </p>

            <div className="flex flex-row flex-wrap w-full md:w-10/12">
                <div className="w-full md:w-1/2 p-2">
                    <div className="border-2 border-[#4b3a17] text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">GENERAL INFORMATION</div>
                        <ul className="list-disc list-inside">
                            <li><a href="/1/11core/">CORE MECHANICS</a></li>
                            <li><a href="/1/12crafting/">CRAFTING</a></li>
                            <li><a href="/1/11core#hunger-thirst-and-resource-management">HUNGER</a></li>
                            <li><a href="/1/13combat/">COMBAT</a></li>
                            <li><a href="/1/14geography/">GEOGRAPHY</a></li>
                            <li><a href="#">ECOLOGY</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-2">
                    <div className="border-2 border-[#4b3a17] text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">CHARACTER INFORMATION</div>
                        <ul className="list-disc list-inside">
                            <li><a href="#">STATS</a></li>
                            <li><a href="#">STATUS EFFECTS</a></li>
                            <li><a href="#">SKILLS</a></li>
                            <li><a href="#">BUFF AND DEBUFF</a></li>
                            <li><a href="/1/11core#hunger-thirst-and-resource-management">HUNGER AND DEHYDRATION</a></li>
                            <li><a href="#">SLEEP AND REST</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-2">
                    <div className="border-2 border-[#4b3a17] text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">WORLD INFORMATION</div>
                        <ul className="list-disc list-inside">
                            <li><a href="#">LOCATION</a></li>
                            <li><a href="/maps/">MAPS</a></li>
                            <li><a href="#">ANIMALS</a></li>
                            <li><a href="/herbs/">HERBS</a></li>
                            <li><a href="/maps/felis/">VILLAGES</a></li>
                            <li><a href="#">ORES</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-2">
                    <div className="border-2 border-[#4b3a17] text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">GUIDES AND WALKTHROUGHS</div>
                        <ul className="list-disc list-inside">
                            <li><a href="#">SURVIVAL GUIDE</a></li>
                            <li><a href="/herbs/">HERBS AND PLANTS</a></li>
                            <li><a href="#">LOCKPICKING GUIDE</a></li>
                            <li><a href="#">CRAFTING AND COOKING</a></li>
                            <li><a href="#">UNLOCKING POSITIONS</a></li>
                            <li><a href="#">WALKTHROUGHS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap w-full md:w-10/12">
                <div className="w-full p-2">
                    <div className="border-2 border-[#4b3a17] text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">ABOUT THE GAME</div>
                        <ul className="list-disc list-inside">
                            {features.map((f) => (
                                <li key={f.title}>
                                    <strong>{f.title}:</strong> <span>{f.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="flex flex-row flex-wrap w-full md:w-10/12">
                <div className="w-full md:w-1/2 p-2">
                    <div className="text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">UPDATES</div>
                        <p>Current Version: 0.12.1</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-2">
                    <div className="text-[#b1a07f] w-full min-h-80 p-4">
                        <div className="text-2xl mb-2">Helpful Links</div>
                        <a target="_blank" href="https://catinmask.itch.io/aurorasfog">
                            Download Game (Demo)
                        </a>
                        <br/>
                        <a target="_blank" href="https://boosty.to/aurorasfog">
                            Boostin Page (Full Game)
                        </a>
                        <br/>
                        <a target="_blank" href="https://www.youtube.com/@catinmask">
                            Official Youtube Channel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
