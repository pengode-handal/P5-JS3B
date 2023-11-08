import React from 'react'
const Footer = () => {
    return (
        <div className="footer">
            <div className="brandname">
                <a href="https://github.com/pengode-handal" target="_blank">
                    <h1 className='font-bold'>SAIPH1337</h1>
                </a>
            </div>
            <div className="copy">
                <p>©2023 <i className="fa-solid fa-heart"></i><a href="#">Jo.Co Ltd.</a></p>
            </div>
            <div className="socials">
                <a href="https://instagram.com/jo.companyy" target="_blank" className="social img-container w">
                    <img src="/instagram-svgrepo-com.svg" alt="Instagram" title="@sma3padmanaba"/>
                </a>
                <a href="https://github.com/pengode-handal/P5-JS3B" target="_blank" className="social img-container w">
                    <img src="/github-repo-git-octocat-svgrepo-com.svg" alt="Github" title="Official Github Gelar Karya Repository"/>
                </a>
            </div>
        </div>
    )
}

export default Footer