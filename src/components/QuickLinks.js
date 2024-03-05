import React from "react"
import "../styles/quickLinks.css"
import YoutubeLogo from "../images/Youtube_app_logo.png"
import NotionLogo from "../images/Notion_app_logo.png"
import DriveLogo from "../images/Drive_app_logo.png"
import GmailLogo from "../images/Gmail_app_logo.png"
import GithubLogo from "../images/Github_app_logo.png"
class QuickLinks extends React.Component {
	render() {
		const { links } = this.props
		return (
			<div id="QuickLinks">
				{links.map((link, index) => {
					let backgroundImage = ""
					if (link.url === "https://youtube.com") {
						backgroundImage = `${YoutubeLogo}`
					} else if (link.url === "https://notion.so") {
						backgroundImage = `${NotionLogo}`
					} else if (link.url === "https://drive.google.com") {
						backgroundImage = `${DriveLogo}`
					} else if (link.url === "https://gmail.com") {
						backgroundImage = `${GmailLogo}`
					} else if (link.url === "https://github.com") {
						backgroundImage = `${GithubLogo}`
					}
					return (
						<p key={index}>
							<a href={link.url}>
								<img
									src={backgroundImage}
									alt={link.name}
									style={{
										width: "7vw",
										height: "15vh"
									}}
								/>
							</a>
						</p>
					)
				})}
			</div>
		)
	}
}

export default QuickLinks
