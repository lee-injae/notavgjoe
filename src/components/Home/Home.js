import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom'

import './home.css'


function Home() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [showMintNotReady, setShowMintNotReady] =useState("")
    const [canClick, setCanClick] =useState(true)

    const onMintClickHandler = () => {
        if (canClick === false) {
            setShowMintNotReady("Public sale will begin at 8PM US Eastern on Friday 14th, 2022")
        }
    }

    return (
        
        <div className="Home">
        
            <header className="header flex">

                <a className="logo-link" href="index.html">
                    <img className="logo" src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} alt="not-average-joe-logo"/>
                </a>    
          
                <div className={menuOpen ? "menu menu-is-active" : "menu"}>

                    <a className="uppercase fs-400 letter-spacing-4" href="#team">
                        <em>Team</em>
                    </a>
                
                    {/* <a className="uppercase fs-400 letter-spacing-4" href="#roadmap">
                        <em>Roadmap</em>
                    </a> */}
                    
                    <a className="uppercase fs-400 letter-spacing-4" href="#faq">
                        <em>FAQ</em>
                    </a>
                </div>

                <div className="sns-links">

                    <a className="insta" href="https://www.instagram.com/notavgjoenft/" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/insta-v02.png`}
                        // onmouseover="this.src={`${process.env.PUBLIC_URL}/assets/insta-red.png`};" 
                        // onmouseout="this.src='./assets/insta-v02.png';" 
                        style={ {marginTop: "1.2em"} } alt="instagram-logo"/>
                    </a>

                    {/* <a className="discord" href="https://discord.gg/TQ4uBkHAjn" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/discord-v02.png`}  
                        style={ {marginTop: "1em"} } alt="discord-logo"/>
                    </a> */}

                    <a className="twitter" href="https://twitter.com/NotAvgJoeNFT" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/twitter-v02.png`} 
                        // onmouseover="this.src='./assets/twitter-red.png';" 
                        // onmouseout="this.src='./assets/twitter-v02.png';"
                        style={ {marginTop: "1em"} } alt="twitter-logo"/>
                    </a>

                    

                </div>

                <button className="hamburger" onClick={
                    () => setMenuOpen(!menuOpen)
                    }>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </header>

            <main className={menuOpen ? "main main-push-down" : "main main-close"}>

                <section className="section-one flex">
                
                    <div className="landing-img flex">
                        {/* <h1 className="fs-700 ff-sans-cond uppercase letter-spacing-3" style="margin-bottom: .5rem;">
                            Three panels,</h1>
                        <h1 className="fs-700 ff-sans-cond uppercase letter-spacing-3" style="margin-bottom: .5rem;">
                            Million stories,</h1>
                        <h1 className="fs-700 ff-sans-cond uppercase letter-spacing-3">Life goes on.</h1>  */}
                        <img src={`${process.env.PUBLIC_URL}assets/joe.png`} 
                        alt="landing-image" style={ {marginTop: "1em"} }/>
                    </div>

                    <div className='landing-msg'>
                        <h2 className='fs-600 letter-spacing-4'>!=Avg(Joe) a.k.a. Not Average Joe is 3-panel 
                            <span className="italic"> Comic Strip</span> that make up 3,333 unique NFTs on Ethereum Network
                        </h2> 
                    </div>
            
                </section>

                <section className="section-two" style={ {marginBottom: "3em"} }>

                    <div className="container">
                        {/* <h1 className="fs-700" style="margin-bottom: .5rem;">
                            <strong>THE STORY OF !=Avg(Joe)</strong>
                        </h1>
                        <h2 className="fs-500 letter-spacing-2" style="margin-bottom: 0rem;"><em>a.k.a. Not Average Joe</em></h2> 
                        <h3 className="fs-500 letter-spacing-2" style="margin-bottom: 1rem;"><em>the evolving comic strip NFT</em></h3>  */}

                        <div className="panels flex">

                            <div className="panels-col-1">
                                <img src={`${process.env.PUBLIC_URL}/assets/panel-1-white.png`} alt="first-panel"/>
                            </div>

                            <div className="panels-col-2">
                                <img src={`${process.env.PUBLIC_URL}/assets/panel-2-white.png`} alt="second-panel"/>
                            </div>

                            <div className="panels-col-3">
                                <img src={`${process.env.PUBLIC_URL}/assets/panel-3-white.png`} alt="third-panel"/>
                            </div>

                        </div>

                        {/* <p className="text-center fs-500 letter-spacing-5" style={ {lineHeight: "2"} }>
                            <span className="strong">"I was an average Joe</span> living in my mom's basement when <span className="strong">
                            some weirdo suggested me to buy some coins</span>. 
                            I was like "nah, dude...", but then he sounded kinda right so I bought 10,000 of them with 
                            the $100 I borrowed from mom. I later saw what it was in the news. 
                            <span className="strong"> I'm not an average Joe anymore</span>. I was lucky 
                            but I know that there are many who aren't, so atm... 
                            I am supporting those in need.    
                        </p> */}

                        <h4 className="fs-500 text-center" style={ {marginBottom: "3em"} }> 
                            My bank balance is $0.99 but... 
                            <span className="fs-500 strong">I'm HODL'ing to the </span>
                            <span className="fs-500 text-yellow">🌕</span>
                            <span className="fs-500 strong">!!!"</span>
                        </h4>

                        <h3 className="fs-600 strong text-center" style={ {marginBottom: ".5em"} }>
                            <h2>What's your story? :)</h2>
                        </h3>
                        
                        <h4 className="fs-500 letter-spacing-4 text-center" style={ {marginBottom: "5em"} }>
                            Tell us your story on <a href="https://twitter.com/NotAvgJoeNFT" 
                            target="_blank" rel="noreferrer"><u>Twitter</u></a> 
                        </h4>    

                        <div className='mint-btn'>

                            {canClick ? 
                            <Link  to='/mint' target="_blank">
                                <button>Mint</button>
                            </Link>
                            :
                            <Link to="#" onClick={onMintClickHandler}>
                                <button>Mint</button>
                                
                            </Link>
                            }
                            
                        </div>
                        
                        < br/>

                        <div className='mint-btn-error-msg'>{showMintNotReady}</div>

                        
                    
                    </div>

                </section>

                <hr/>

                <section className="section-three" id="team" style={ {marginBottom: "3em"} }>

                    <div className="container">

                        <h1 className="fs-700 strong uppercase" style={ {marginBottom: ".75em"} }>The Team</h1>

                        <div className="team-cols flex">
                            
                            <div className="member-col">
                                <img src={`${process.env.PUBLIC_URL}/assets/dj.png`} alt="founder-7.7years-old"/>
                                <h4 className="member-name fs-500 uppercase letter-spacing-5 strong">7.7YearsOld</h4>
                                <p className="fs-400 letter-spacing-5">
                                    An Avg(Joe) with C grades, cowlick hair and ashtray odor 
                                    turnt investment banker who told his boss “ser I'm done, gn” and left. 
                                    Now !=Avg(Joe) deep into NFTs and the people in the space.
                                </p>
                            </div>
                            
                            <div className="member-col">
                                <img src={`${process.env.PUBLIC_URL}/assets/ij.png`} alt="founder-aahjai"/>
                                <h4 className="member-name fs-500 uppercase letter-spacing-5 strong">AAH-JAI</h4>
                                <p className="fs-400 letter-spacing-5">
                                    An Avg(Joe) with rainbow-color-hair turnt one-of-a-kind 
                                    startup CEO turnt a Avg(dev). Lives in many places across the world as long 
                                    as no quarantine upon arrival.
                                </p>
                            </div>

                            <div className="member-col">
                                <img src={`${process.env.PUBLIC_URL}/assets/hk.png`} alt="founder-zoho"/>
                                <h4 className="member-name fs-500 uppercase letter-spacing-5 strong">ZoHo</h4>
                                <p className="fs-400 letter-spacing-5">
                                    A shy Avg(Joe) who couldn't press the stop button on a 
                                    bus due to people's attention. Now a top storyboard designer and an artist 
                                    for Korean movies and TV series.
                                </p>
                            </div>

                            <div className="member-col">
                                <img src={`${process.env.PUBLIC_URL}/assets/dh.png`} alt="founder-frenchcatbulldog"/>
                                <h4 className="member-name fs-400 uppercase letter-spacing-5 strong">FrenchBull DougtheCat</h4>
                                <p className="fs-400 letter-spacing-5">
                                    An ex-DJ and fun craving Avg(Joe) who once created own brand 
                                    sold 500+ denim pants to his family members. Now a master of content strategy and marketing.
                                </p>
                            </div>

                            <div className="member-col">
                                <img src={`${process.env.PUBLIC_URL}/assets/jb.png`} alt="founder-hannibal"/>
                                <h4 className="member-name fs-500 uppercase letter-spacing-5 strong">Hannibal</h4>
                                <p className="fs-400 letter-spacing-5">
                                    A sports-fanatic Avg(Joe) from Michigan and an expert in slicing data
                                    and pizza during early days of career. Now a Fortune 33 strategy and marketing advisor 
                                    who accidentally got into NFT and never looked back.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>    

                <hr/>

                {/* <section className="section-four" id="roadmap" style={ {marginBottom: "3em"} }>

                    <div className="container">

                        <h1 className="fs-700 strong uppercase" style={ {marginBottom: ".75em"} }>Roadmap</h1>
                        
                        <div className="roadmap-cols flex">

                            <div className="roadmap-col">
                                <img className="image-mobile" src={`${process.env.PUBLIC_URL}/assets/roadmap-mobile-low.png`} alt="roadmap-mobile-screen"/>
                                <img className="image-full" src={`${process.env.PUBLIC_URL}/assets/roadmap-full.png`} alt="roadmap-bigscreen"/>
                            </div>

                            <div className="roadmap-col">
                                <img className="image-mobile" src={`${process.env.PUBLIC_URL}/assets/benefits-mobile-low.png`} alt="benefits-explanations-mobile-screen"/>
                                <img className="image-full" src={`${process.env.PUBLIC_URL}/assets/benefits-full.png`} alt="benefits-explanations-bigscreen"/> 
                            </div>
                            
                            <div className="roadmap-col">
                                <img className="image-mobile" src={`${process.env.PUBLIC_URL}/assets/otherplans-mobile.png`} alt="otherplans-mobile-screen"/>
                                <img className="image-full" src={`${process.env.PUBLIC_URL}/assets/otherplans-full-low.png`} alt="other-plans-full"/>
                            </div>
                        </div>

                    </div>
                </section> */}

                <hr/>

                <section className="section-five" id="faq">

                    <div className="container letter-spacing-1">

                        <h1 className="fs-700 strong uppercase" style={ {marginBottom: "1em"} }>FAQ</h1>

                        <div className="questions">Q. What is !=Avg(Joe) about?

                            <li className="answers">
                                An evolving comic strip NFT with a story of !=Avg(Joe) a.k.a Not Average Joe
                            </li>

                            <li className="answers" style={ {lineHeight: "2"} }>
                                We wanted to tell a story on...
                                <br/>
                                <i>how... many of us were average Joes,</i>
                                <br/>
                                <i>made a decision to get into the crypto / NFT space,</i>
                                <br/>
                                <i>are now learning . growing . shilling . helping one another today</i>
                            </li>

                            <li className="answers" style={ {lineHeight: "2"} }>
                                We think the crypto & NFT space have given a lot of people a chance to become !=Avg(Joe) 
                                and we are still in the middle of that opportunity land today.
                                Also, we saw a lot of beautiful !=Avg(Joes) sharing . caring . givingaway . helping others, 
                                so we chose such !=Avg(Joe) to be the rarest, hence the most valuable panel in our collection
                            </li>

                        </div>
                        
                        <div className="questions">Q. How many NFTs in Phase 1?
                            <li className="answers">3,333 randomly generated NFTs; 1,111 per each panel</li>
                        </div>
                        
                        {/* <div className="questions">Q. When pre-sale & public-sale?
                            <li className="answers">Pre-sale: 5PM/8PM PST/EST, January 13 | Public-sale: 5PM/8PM PST/EST, January 14, 2022</li>
                        </div> */}
                                        
                        {/* <div className="questions">Q. Price?
                            <li className="answers">Pre-sale: 0.03 ETH, Public-sale: 0.05 ETH</li>
                        </div> */}
                        
                        <div className="questions">Q. How many mints per wallet?
                            <li className="answers">Twenty</li>
                        </div>

                        <div className="questions">Q. What chain?
                            <li className="answers">ERC-721 token standard</li>
                        </div>

                        <div className="questions">Q. How can I join?
                            <li className="answers">We'd love you see you on <a href="https://twitter.com/NotAvgJoeNFT" target="_blank" rel="noreferrer"><u>Twitter</u></a> 
                            </li>
                        </div>

                        {/* 
                        <div className="questions">where spend monie?
                            <li className="answers">We will spend monie in developing Phase 2 story, 
                                artwork and design, and also cover Phase 1 costs</li>
                            <li className="answers">We will spend big chunk of monie on helping other
                                    Avg(Joe) in need which will be through our official Twitter
                            account with 100% transparency</li>
                        </div>  */}
                    </div>
                </section>

                <hr style={ {marginBottom: "0.5rem"} }/>

            </main>

            <footer style={ {marginBottom: "1.5em"} }>
                <div className="container">
                
                    <div>
                        <p className="text-center">© 2021 Aggressively Unemployed</p>
                        <p className='app-version'>v1.22 </p>
                    </div>
                
                </div>
            </footer>
        </div>

  );
}

export default Home;
